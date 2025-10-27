// CIOS 2025 Certificate Download Configuration
// Update these settings according to your deployment

const CIOS2025_CONFIG = {
    // API Configuration
    API_BASE_URL: 'https://zinvos.tessst.com', // Replace with your actual API domain
    REGISTRATION_SEARCH_ENDPOINT: '/api/registration-search/',
    CERTIFICATE_DOWNLOAD_ENDPOINT: '/api/certificate-download/',
    
    // Event Configuration
    EVENT_NAME: 'CIOS2025',
    
    // UI Configuration
    LOGO_URL: 'https://via.placeholder.com/200x80/667eea/ffffff?text=CIOS+2025', // Replace with your actual logo URL
    CONFERENCE_NAME: 'CIOS 2025',
    CONFERENCE_TITLE: 'Certificate Download',
    CONFERENCE_SUBTITLE: 'Download your CIOS 2025 Conference Certificate',
    
    // Contact Information
    SUPPORT_EMAIL: 'support@cios2025.com',
    
    // Search Configuration
    MINIMUM_SEARCH_LENGTH: 2,
    SEARCH_DELAY: 250,
    MAX_RESULTS: 20,
    
    // Certificate Configuration
    CERTIFICATE_FILENAME_PREFIX: 'CIOS2025_Certificate_'
};

// Make configuration available globally
window.CIOS2025_CONFIG = CIOS2025_CONFIG;
