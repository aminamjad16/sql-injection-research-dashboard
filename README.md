# SQL Injection Research Dashboard

A comprehensive Next.js dashboard for analyzing and comparing machine learning algorithms in SQL injection detection research. This interactive dashboard provides detailed insights into algorithm performance, confusion matrices, ROC curves, and feature importance analysis.

## Features

- **Algorithm Comparison**: Compare multiple machine learning algorithms side by side
- **Performance Metrics**: Detailed accuracy, precision, recall, and F1-score analysis
- **Confusion Matrix Visualization**: Interactive confusion matrices for each algorithm
- **ROC Curve Analysis**: Receiver Operating Characteristic curve comparisons
- **Feature Importance**: Random Forest feature importance visualization
- **Responsive Design**: Mobile-friendly interface with dark/light theme support

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Theme**: Next Themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aminamjad16/sql-injection-research-dashboard.git
cd sql-injection-research-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── algorithm-*.tsx   # Algorithm-specific components
│   └── *.tsx            # Other dashboard components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```

## Key Components

- **Algorithm Comparison**: Side-by-side algorithm performance comparison
- **Confusion Matrix Grid**: Visual representation of classification results
- **ROC Curve Analysis**: Performance curve visualization
- **Metrics Table**: Detailed performance statistics
- **Feature Importance**: ML feature significance analysis

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Research Context

This dashboard is designed for SQL injection detection research, providing researchers and security professionals with tools to:

- Analyze machine learning model performance
- Compare different detection algorithms
- Visualize classification results
- Understand feature importance in detection models
- Generate insights for research publications

## Support

If you encounter any issues or have questions, please open an issue on GitHub.