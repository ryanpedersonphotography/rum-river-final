// import fetch from 'node-fetch'; // Native fetch used
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load credentials from .env.namecheap
dotenv.config({ path: '.env.namecheap' });

const DOMAIN = 'rumriverweddingbarn.com';
const NETLIFY_IP = '75.2.60.5';
const NETLIFY_SITE_HOST = 'rum-river-final.netlify.app';

async function configureDNS() {
  const [sld, tld] = DOMAIN.split('.');
  
  console.log(`🚀 Configuring DNS for ${DOMAIN}...`);
  
  // NameCheap API parameters for DNS configuration
  const params = new URLSearchParams({
    ApiUser: process.env.NAMECHEAP_API_USER,
    ApiKey: process.env.NAMECHEAP_API_KEY,
    UserName: process.env.NAMECHEAP_USERNAME,
    ClientIp: process.env.NAMECHEAP_CLIENT_IP,
    Command: 'namecheap.domains.dns.setHosts',
    SLD: sld,
    TLD: tld,
    
    // Record 1: A Record for @ -> Netlify Load Balancer
    HostName1: '@',
    RecordType1: 'A',
    Address1: NETLIFY_IP,
    TTL1: '300',
    
    // Record 2: CNAME for www -> Netlify Site URL
    HostName2: 'www',
    RecordType2: 'CNAME', 
    Address2: NETLIFY_SITE_HOST,
    TTL2: '300'
  });

  try {
    const response = await fetch('https://api.namecheap.com/xml.response', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });

    const text = await response.text();
    
    console.log('Response from Namecheap:');
    console.log(text.substring(0, 500) + '...'); // Log first 500 chars to check status

    if (text.includes('Status="OK"')) {
      console.log('✅ DNS records configured successfully!');
      console.log(`   @   A     ${NETLIFY_IP}`);
      console.log(`   www CNAME ${NETLIFY_SITE_HOST}`);
    } else {
      console.error('❌ Failed to configure DNS.');
      if (text.includes('Error')) {
        // Extract error description if simple XML parsing is possible, or just look at log
        const match = text.match(/<Error Number="\d+">([^<]+)<\/Error>/);
        if (match) {
          console.error(`   Error: ${match[1]}`);
        }
      }
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
}

configureDNS();
