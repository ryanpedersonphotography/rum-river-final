import {
  CalendarIcon,
  HomeIcon,
  SparklesIcon,
  HeartIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  CameraIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  TrophyIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UserGroupIcon,
  GiftIcon,
  CheckIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  PlayIcon,
  PhotoIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  SwatchIcon,
  BeakerIcon,
  BookOpenIcon,
  LightBulbIcon,
  FireIcon,
  SunIcon,
  MoonIcon,
  CloudIcon,
  GlobeAltIcon,
  ShoppingBagIcon,
  CakeIcon,
  TicketIcon,
  FlagIcon,
  BellIcon,
  MegaphoneIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  CogIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  RectangleGroupIcon,
  FolderIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  HandThumbUpIcon,
  HandRaisedIcon,
  ArrowTrendingUpIcon,
  ChartPieIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  ReceiptPercentIcon,
  TagIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  KeyIcon,
  FingerPrintIcon,
  EyeIcon,
  EyeSlashIcon,
  ShareIcon,
  LinkIcon,
  PaperAirplaneIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  PrinterIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  TvIcon,
  WifiIcon,
  SignalIcon,
  ServerIcon,
  CloudArrowUpIcon,
  TrashIcon,
  ArchiveBoxIcon,
  InboxIcon,
  PaperClipIcon,
  BookmarkIcon,
  HashtagIcon,
  AtSymbolIcon,
  ChatBubbleLeftIcon,
  UserIcon,
  UsersIcon,
  UserPlusIcon,
  IdentificationIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  NewspaperIcon,
  MicrophoneIcon,
  RadioIcon,
  FilmIcon,
  CalculatorIcon,
  CreditCardIcon,
  CubeIcon,
  PuzzlePieceIcon,
  LifebuoyIcon,
  RocketLaunchIcon,
  TruckIcon,
  MapIcon,
  BuildingStorefrontIcon,
  BuildingLibraryIcon,
  HomeModernIcon,
  ScaleIcon,
  BeakerIcon as ScienceIcon,
  CommandLineIcon,
  CpuChipIcon,
  CircleStackIcon,
  CodeBracketIcon,
  ServerStackIcon,
  WindowIcon,
  GlobeAsiaAustraliaIcon,
  LanguageIcon,
  AcademicCapIcon as GraduationCapIcon
} from '@heroicons/react/24/outline'

import {
  CalendarIcon as CalendarIconSolid,
  HomeIcon as HomeIconSolid,
  SparklesIcon as SparklesIconSolid,
  HeartIcon as HeartIconSolid,
  CheckCircleIcon as CheckCircleIconSolid,
  StarIcon as StarIconSolid,
  TrophyIcon as TrophyIconSolid,
  CakeIcon as CakeIconSolid,
  GiftIcon as GiftIconSolid,
  FireIcon as FireIconSolid,
  SunIcon as SunIconSolid,
  BellIcon as BellIconSolid,
  ShieldCheckIcon as ShieldCheckIconSolid,
  BookmarkIcon as BookmarkIconSolid,
  HandThumbUpIcon as HandThumbUpIconSolid
} from '@heroicons/react/24/solid'

// Icon mapping for common uses
const iconMap = {
  // Schedule/Calendar
  calendar: CalendarIcon,
  schedule: CalendarIcon,
  date: CalendarIcon,
  calendarSolid: CalendarIconSolid,
  
  // Home/Building
  home: HomeIcon,
  house: HomeIcon,
  building: BuildingOfficeIcon,
  venue: HomeModernIcon,
  homeSolid: HomeIconSolid,
  
  // Decorative
  sparkles: SparklesIcon,
  sparkle: SparklesIcon,
  magic: SparklesIcon,
  sparklesSolid: SparklesIconSolid,
  
  // Love/Romance
  heart: HeartIcon,
  love: HeartIcon,
  wedding: HeartIcon,
  heartSolid: HeartIconSolid,
  
  // Status
  check: CheckCircleIcon,
  success: CheckCircleIcon,
  complete: CheckCircleIcon,
  checkSolid: CheckCircleIconSolid,
  error: XCircleIcon,
  cancel: XCircleIcon,
  close: XCircleIcon,
  warning: ExclamationTriangleIcon,
  alert: ExclamationTriangleIcon,
  
  // Media
  camera: CameraIcon,
  photo: PhotoIcon,
  gallery: PhotoIcon,
  video: VideoCameraIcon,
  music: MusicalNoteIcon,
  play: PlayIcon,
  
  // Documents
  document: DocumentTextIcon,
  file: DocumentTextIcon,
  clipboard: ClipboardDocumentCheckIcon,
  
  // Analytics
  chart: ChartBarIcon,
  analytics: ChartPieIcon,
  trending: ArrowTrendingUpIcon,
  
  // Creative
  paint: PaintBrushIcon,
  palette: SwatchIcon,
  design: PaintBrushIcon,
  
  // Tools
  wrench: WrenchScrewdriverIcon,
  tools: WrenchScrewdriverIcon,
  settings: CogIcon,
  adjust: AdjustmentsHorizontalIcon,
  
  // Achievement
  trophy: TrophyIcon,
  award: TrophyIcon,
  trophySolid: TrophyIconSolid,
  star: StarIcon,
  starSolid: StarIconSolid,
  
  // Communication
  phone: PhoneIcon,
  email: EnvelopeIcon,
  message: ChatBubbleLeftIcon,
  chat: ChatBubbleLeftRightIcon,
  megaphone: MegaphoneIcon,
  
  // Location
  map: MapIcon,
  location: MapPinIcon,
  pin: MapPinIcon,
  compass: MapIcon,
  
  // Time
  clock: ClockIcon,
  time: ClockIcon,
  
  // People
  user: UserIcon,
  users: UserGroupIcon,
  people: UsersIcon,
  
  // Special Events
  gift: GiftIcon,
  present: GiftIcon,
  giftSolid: GiftIconSolid,
  cake: CakeIcon,
  celebration: CakeIcon,
  cakeSolid: CakeIconSolid,
  party: GiftIcon,
  
  // Actions
  search: MagnifyingGlassIcon,
  edit: PencilSquareIcon,
  share: ShareIcon,
  link: LinkIcon,
  download: ArrowDownTrayIcon,
  upload: ArrowUpTrayIcon,
  send: PaperAirplaneIcon,
  
  // UI Elements
  chevronDown: ChevronDownIcon,
  arrowRight: ArrowRightIcon,
  menu: Squares2X2Icon,
  grid: RectangleGroupIcon,
  
  // Info
  info: InformationCircleIcon,
  question: QuestionMarkCircleIcon,
  
  // Security
  shield: ShieldCheckIcon,
  shieldSolid: ShieldCheckIconSolid,
  lock: LockClosedIcon,
  key: KeyIcon,
  
  // Nature
  sun: SunIcon,
  sunSolid: SunIconSolid,
  moon: MoonIcon,
  cloud: CloudIcon,
  fire: FireIcon,
  fireSolid: FireIconSolid,
  
  // Commerce
  shop: ShoppingBagIcon,
  store: BuildingStorefrontIcon,
  dollar: CurrencyDollarIcon,
  money: BanknotesIcon,
  discount: ReceiptPercentIcon,
  tag: TagIcon,
  
  // Misc
  flag: FlagIcon,
  bell: BellIcon,
  bellSolid: BellIconSolid,
  bookmark: BookmarkIcon,
  bookmarkSolid: BookmarkIconSolid,
  thumbsUp: HandThumbUpIcon,
  thumbsUpSolid: HandThumbUpIconSolid,
  lightning: BoltIcon,
  rocket: RocketLaunchIcon,
  lifebuoy: LifebuoyIcon
}

/**
 * Universal Icon Component
 * 
 * @param {string} name - Icon name from the iconMap
 * @param {string} className - Additional CSS classes
 * @param {string} size - Size preset: 'xs', 'sm', 'md', 'lg', 'xl'
 * @param {string} color - Color variant: 'primary', 'secondary', 'accent', 'gold', 'success', 'error', 'warning'
 * @param {boolean} solid - Use solid variant if available
 * @param {object} style - Additional inline styles
 */
export default function Icon({ 
  name, 
  className = '', 
  size = 'md', 
  color = 'current',
  solid = false,
  style = {},
  ...props 
}) {
  // Try to get solid variant first if requested
  const solidName = solid ? `${name}Solid` : name
  const IconComponent = iconMap[solidName] || iconMap[name] || QuestionMarkCircleIcon
  
  // Size classes
  const sizeClasses = {
    xs: 'icon-xs',
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
    xl: 'icon-xl'
  }
  
  // Color classes
  const colorClasses = {
    current: 'icon-current',
    primary: 'icon-primary',
    secondary: 'icon-secondary',
    accent: 'icon-accent',
    gold: 'icon-gold',
    success: 'icon-success',
    error: 'icon-error',
    warning: 'icon-warning',
    white: 'icon-white',
    muted: 'icon-muted'
  }
  
  const classes = [
    'icon',
    sizeClasses[size] || sizeClasses.md,
    colorClasses[color] || colorClasses.current,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <IconComponent 
      className={classes}
      style={style}
      aria-hidden="true"
      {...props}
    />
  )
}

// Export icon mapping for reference
export { iconMap }