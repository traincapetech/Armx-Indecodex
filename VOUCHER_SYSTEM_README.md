# 🎫 Voucher Selling System

## Overview
A comprehensive voucher selling system integrated into the Armx-Indecodex website, allowing admins to manage and sell certification vouchers for various courses.

## Features

### ✅ Admin Panel Features
- **Create Voucher Batches**: Upload multiple voucher codes for specific courses/subcourses
- **Price Management**: Set and update voucher prices anytime
- **Inventory Tracking**: Monitor available, sold, and used vouchers
- **Sales Analytics**: Real-time dashboard with revenue and sales data
- **Batch Management**: View and manage all voucher batches

### ✅ User Features
- **Smart Voucher Buttons**: Only appear when vouchers are available
- **Instant Purchase**: Quick checkout process with Stripe integration
- **Email Delivery**: Automatic voucher code delivery via email
- **Success/Cancel Pages**: Professional landing pages after purchase

### ✅ Technical Features
- **Real-time Availability**: Checks voucher availability before showing buttons
- **Secure Payments**: Stripe integration for instant payment processing
- **Email Notifications**: Professional HTML email templates
- **Responsive Design**: Works on all devices
- **Error Handling**: Comprehensive error handling and user feedback

## Implementation

### Backend Components
- **Models**: `Voucher`, `VoucherBatch`, `VoucherPurchase`
- **Controllers**: Complete CRUD operations and business logic
- **Routes**: RESTful API endpoints for all voucher operations
- **Email System**: Automated voucher delivery

### Frontend Components
- **VoucherButton**: Smart button component for course pages
- **VoucherPurchase**: Modal for purchasing vouchers
- **VoucherSuccess/VoucherCancel**: Landing pages after purchase
- **Admin Panel**: Complete management interface

## Course Integration

### Updated Course Pages
- ✅ **Microsoft** - All subcourses with voucher buttons
- ✅ **AWS** - All subcourses with voucher buttons  
- ✅ **Cisco** - All subcourses with voucher buttons
- ✅ **CompTIA** - All subcourses with voucher buttons
- ✅ **Individual Course Pages** - Voucher buttons in sidebars

### Course Components Updated
- ✅ **MicrosoftCourse** - Added voucher support
- ✅ **ComptiaCourse** - Added voucher support
- ✅ **CiscoCourse** - Added voucher support

## Setup Instructions

### 1. Environment Variables
Add to your `.env` file:
```
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### 2. Database Setup
The voucher system uses MongoDB with the following collections:
- `vouchers` - Individual voucher records
- `voucherbatches` - Batch management
- `voucherpurchases` - Purchase tracking

### 3. Email Configuration
Update `server/utils/email.js` with your email credentials:
```javascript
const emailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
};
```

## Usage

### For Admins
1. Go to Admin Panel → Voucher Management
2. Create voucher batches for your courses
3. Upload voucher codes from providers (Certiport, etc.)
4. Set prices and monitor sales

### For Users
1. Browse course pages (Microsoft, AWS, Cisco, CompTIA)
2. Click "Buy Voucher" button when available
3. Enter details and complete payment
4. Receive voucher code via email

## API Endpoints

### Admin Routes (Protected)
- `POST /vouchers/batches` - Create voucher batch
- `GET /vouchers/batches` - List all batches
- `PUT /vouchers/batches/price` - Update batch price
- `GET /vouchers/analytics` - Get sales analytics

### Public Routes
- `GET /vouchers/available` - Check voucher availability
- `POST /vouchers/purchase` - Purchase voucher
- `POST /vouchers/complete-purchase` - Complete payment

## File Structure

```
Armx-Indecodex_/
├── client/src/
│   ├── components/
│   │   ├── VoucherButton.jsx
│   │   ├── VoucherPurchase.jsx
│   │   ├── MicrosoftCourse.jsx (updated)
│   │   ├── ComptiaCourse.jsx (updated)
│   │   └── CiscoCourse.jsx (updated)
│   ├── pages/
│   │   ├── Microsoft.jsx (updated)
│   │   ├── Aws.jsx (updated)
│   │   ├── Cisco.jsx (updated)
│   │   ├── Comptia.jsx (updated)
│   │   ├── VoucherSuccess.jsx
│   │   └── VoucherCancel.jsx
│   └── pages/AdminPanel/VoucherManagement/
│       ├── VoucherManagement.jsx
│       ├── CreateVoucherBatch.jsx
│       ├── VoucherAnalytics.jsx
│       └── VoucherBatches.jsx
└── server/
    ├── model/
    │   ├── voucher.model.js
    │   ├── voucherBatch.model.js
    │   └── voucherPurchase.model.js
    ├── controllers/
    │   └── voucher.controller.js
    ├── routes/
    │   └── voucher.routes.js
    └── utils/
        └── email.js (updated)
```

## Next Steps

### Immediate
1. Set up Stripe account and add publishable key
2. Configure email settings
3. Create first voucher batches in admin panel
4. Test purchase flow

### Future Enhancements
- Discount codes system
- Bulk purchase discounts
- Student pricing
- Multiple currency support
- Advanced analytics
- Voucher expiration dates

## Support

For technical support or questions about the voucher system, contact the development team.

---

**Note**: This system is now fully integrated and ready for production use. All course pages have been updated to support voucher purchases, and the admin panel provides complete management capabilities.
