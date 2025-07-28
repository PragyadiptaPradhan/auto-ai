
# Auto AI 🤖

An intelligent AI-powered website generator that creates fully functional websites and web applications through natural language conversations. Built with cutting-edge technologies for seamless development experiences.

## 🌐 Live Demo

**[🚀 Try Auto AI Live](https://auto-ai-lilac.vercel.app/)**

Experience the power of AI-driven website generation at: `https://auto-ai-lilac.vercel.app/`

## � Tutorial

This project was built following this comprehensive tutorial by Antonio:

**[🎬 Build an AI Website Generator - Full Tutorial by Antonio](https://youtu.be/xs8mWnbMcmc?si=n65hMHlOupN_3AaM)**

Learn how to create your own AI-powered website generator from scratch! The tutorial covers:
- Setting up the development environment
- Integrating AI models for code generation
- Building the user interface with modern React components
- Implementing real-time code execution
- Deployment and production setup

## �🚀 Features

- **AI Website Generation**: Generate complete websites and web applications using natural language prompts
- **Interactive Development**: Chat with AI to iteratively build and modify your projects
- **Live Code Execution**: Real-time code execution and preview using E2B sandboxed environments
- **Template Library**: Pre-built templates for popular applications (Netflix clone, Admin dashboard, Kanban board, etc.)
- **Project Management**: Organize and manage multiple AI-generated projects
- **Authentication & Billing**: Secure user authentication with Clerk and subscription management
- **Real-time Updates**: Background processing with Inngest for seamless user experience
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Type Safety**: Full TypeScript support with Zod validation
- **Responsive Design**: Mobile-first responsive design across all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **AI Integration**: GPT-4 via OpenAI API and Inngest Agent Kit
- **Code Execution**: E2B Code Interpreter (Sandboxed environments)
- **Database**: Prisma ORM with PostgreSQL
- **Authentication**: Clerk for user management and billing
- **Background Jobs**: Inngest for AI processing and job orchestration
- **UI Components**: Radix UI primitives with shadcn/ui
- **Styling**: Tailwind CSS
- **API**: tRPC for type-safe APIs
- **State Management**: TanStack Query (React Query)
- **Validation**: Zod for runtime type checking
- **Charts & Visualization**: Recharts
- **File Management**: Advanced file explorer with syntax highlighting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/PragyadiptaPradhan/auto-ai.git
cd auto-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables (create a `.env.local` file):
```env
# Database
DATABASE_URL="your-postgresql-database-url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"

# OpenAI API
OPENAI_API_KEY="your-openai-api-key"

# E2B Code Interpreter
E2B_API_KEY="your-e2b-api-key"

# Inngest
INNGEST_EVENT_KEY="your-inngest-event-key"
INNGEST_SIGNING_KEY="your-inngest-signing-key"

# App URL (for production)
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. Set up your database:
```bash
npx prisma generate
npx prisma db push
```


## 🚦 Getting Started

1. Start the development server:
```bash
npm run dev
```

2. In a separate terminal, run Inngest for AI background processing:
```bash
npx inngest-cli@latest dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to start generating websites with AI!

## 🎯 How It Works

1. **Create a Project**: Start by describing what kind of website you want to build
2. **AI Generation**: Our AI agent processes your request and generates the complete codebase
3. **Live Preview**: See your website come to life in real-time with live preview
4. **Iterate & Refine**: Chat with the AI to make changes, add features, or fix issues
5. **Download & Deploy**: Export your generated code or deploy directly

## 📋 Available Templates

Auto AI comes with pre-built templates to get you started quickly:

- 🎬 **Netflix Clone** - Streaming platform with hero banners and movie grids
- 📦 **Admin Dashboard** - Complete admin interface with charts and tables
- 📋 **Kanban Board** - Project management tool with drag-and-drop
- 🗂️ **File Manager** - File organization system with folder navigation
- 📺 **YouTube Clone** - Video platform with thumbnails and categories
- 🛍️ **E-commerce Store** - Online store with products and shopping cart
- 🏡 **Airbnb Clone** - Property rental platform with listings
- 🎵 **Spotify Clone** - Music streaming interface with playlists

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (home)/            # Home page and authentication
│   │   ├── page.tsx       # Landing page with project creation
│   │   ├── pricing/       # Subscription plans
│   │   ├── sign-in/       # User authentication
│   │   └── sign-up/       # User registration
│   ├── projects/          # Project management pages
│   │   └── [projectId]/   # Individual project view
│   └── api/               # API routes
│       ├── trpc/          # tRPC API endpoints
│       └── inngest/       # Inngest webhook handlers
├── components/            # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   ├── file-explorer.tsx  # Code file browser
│   ├── tree-view.tsx      # File tree navigation
│   └── code-view/         # Syntax highlighted code viewer
├── modules/               # Feature-specific modules
│   ├── home/              # Landing page components
│   ├── projects/          # Project management
│   ├── messages/          # Chat interface
│   └── usage/             # Billing and usage tracking
├── inngest/               # AI agent and background jobs
│   ├── function.ts        # Main AI code generation function
│   ├── client.ts          # Inngest client configuration
│   └── utils.ts           # AI processing utilities
├── lib/                   # Utility functions and configurations
├── trpc/                  # tRPC server and client setup
├── hooks/                 # Custom React hooks
├── generated/             # Generated Prisma client
└── types.ts               # Global type definitions
```
[![](https://mermaid.ink/img/pako:eNptU21P2zAQ_isnS6AilaylL2GRNqktZavGpo6CJo3wwU0uaSCxM9uh3YD_vrMTwsuWL7Hv7nnunrvzPYtkjCxge3swqYyEyQJmZFlzjXCayy2cZDxVvAhFQrdow5WBi5NQAH2EOVVSGBRxbag0qquQXdIPpkpu6R-yazg8_PgQsplCbhCWSt5gZEL2ACVPkcK_4c54N9pdPaN30PksCzwgZM1q7Q2HOV_OoKgMN5kUYSjKmkx7kSO3pEaVEZG2HqOh42BKVgZVTdvWP1kuYB9OuOFWcW22DE2-hSAJ5qlmothSUk3pKw0foCThmUht1nh91QnZUmqTKlx9P4O7jBMs0wUP2cH1P8TzIjOwECJFbQDvUJhnNe8U_qrIjrFlds4rW0odPHfBr0RMeXSbkjwRww-pbqnpzuOQNh8k4gVBUonIto8607Y4Ea-HND-awoqLeC13tgZdH4nkleMt-IwT9QYmKeX9QvrcQVsC7k6Eb32diYo2mSG5XbdwqgsXVrN6nnsNcgKaAmp7c2mSfkKBimqO4TTL0WVLxJvCptSaHGnQS1Q6ox60ofH6TehXrm7bebeTjqXAp_C27efIc5MVCJcLuCxjqkHXvnj9cl0Tm8vLKS2NeLWaQ9XEEl8W2wdgq5nvylwqejf7rh1LhXcZbtteUKBrxP9fGOuyVGUxCxKea-yyAlXB7Z3dWzgVssGCBAR0jElgyELxSKCSi59SFiwwqiIYrVC6aUnqMpvn31oV7TyqGS2bYcGgf-RIWHDPdizo-2PP7x35_fFo2B-Mh71Rl_1mweHA994P_OFoODge90Zj_7HL_ri0Pe_YHz3-BbSKeHw?type=png)](https://mermaid.live/edit#pako:eNptU21P2zAQ_isnS6AilaylL2GRNqktZavGpo6CJo3wwU0uaSCxM9uh3YD_vrMTwsuWL7Hv7nnunrvzPYtkjCxge3swqYyEyQJmZFlzjXCayy2cZDxVvAhFQrdow5WBi5NQAH2EOVVSGBRxbag0qquQXdIPpkpu6R-yazg8_PgQsplCbhCWSt5gZEL2ACVPkcK_4c54N9pdPaN30PksCzwgZM1q7Q2HOV_OoKgMN5kUYSjKmkx7kSO3pEaVEZG2HqOh42BKVgZVTdvWP1kuYB9OuOFWcW22DE2-hSAJ5qlmothSUk3pKw0foCThmUht1nh91QnZUmqTKlx9P4O7jBMs0wUP2cH1P8TzIjOwECJFbQDvUJhnNe8U_qrIjrFlds4rW0odPHfBr0RMeXSbkjwRww-pbqnpzuOQNh8k4gVBUonIto8607Y4Ea-HND-awoqLeC13tgZdH4nkleMt-IwT9QYmKeX9QvrcQVsC7k6Eb32diYo2mSG5XbdwqgsXVrN6nnsNcgKaAmp7c2mSfkKBimqO4TTL0WVLxJvCptSaHGnQS1Q6ox60ofH6TehXrm7bebeTjqXAp_C27efIc5MVCJcLuCxjqkHXvnj9cl0Tm8vLKS2NeLWaQ9XEEl8W2wdgq5nvylwqejf7rh1LhXcZbtteUKBrxP9fGOuyVGUxCxKea-yyAlXB7Z3dWzgVssGCBAR0jElgyELxSKCSi59SFiwwqiIYrVC6aUnqMpvn31oV7TyqGS2bYcGgf-RIWHDPdizo-2PP7x35_fFo2B-Mh71Rl_1mweHA994P_OFoODge90Zj_7HL_ri0Pe_YHz3-BbSKeHw)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check
- `npx prisma studio` - Open Prisma database browser
- `npx prisma db push` - Push schema changes to database
- `npx inngest-cli dev` - Start Inngest development server

## 🎨 Key Features

### AI-Powered Code Generation
- Natural language to code conversion
- Intelligent code completion and suggestions
- Real-time error detection and fixing
- Context-aware development assistance

### Live Development Environment
- Sandboxed execution with E2B
- Hot reload and live preview
- Terminal access within sandbox
- File system operations

### Project Management
- Multiple project organization
- Version history and rollback
- Template-based quick start
- Export and deployment options

### User Interface
- Responsive design for all devices
- Dark/light mode support
- Syntax highlighted code editor
- Interactive file explorer
- Real-time chat interface

## 🔒 Environment Variables

Make sure to set up the following environment variables in your `.env.local` file:

```env
# Database Configuration
DATABASE_URL="postgresql://user:password@localhost:5432/autoai"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# OpenAI API (for AI code generation)
OPENAI_API_KEY="sk-..."

# E2B Code Interpreter (for code execution)
E2B_API_KEY="your-e2b-api-key"

# Inngest (for background job processing)
INNGEST_EVENT_KEY="your-inngest-event-key"
INNGEST_SIGNING_KEY="your-inngest-signing-key"

# Application URL (for production deployment)
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
```

### Getting API Keys

1. **Clerk**: Sign up at [clerk.com](https://clerk.com) for authentication services
2. **OpenAI**: Get your API key from [platform.openai.com](https://platform.openai.com)
3. **E2B**: Register at [e2b.dev](https://e2b.dev) for code execution environments
4. **Inngest**: Sign up at [inngest.com](https://inngest.com) for background job processing


## 📚 Learn More

To learn more about the technologies used in this project:

### Core Technologies
- [Next.js Documentation](https://nextjs.org/docs) - React framework with App Router
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Type-safe JavaScript
- [Prisma Documentation](https://www.prisma.io/docs/) - Database ORM and migrations

### AI & Development Tools
- [OpenAI API Documentation](https://platform.openai.com/docs) - AI language models
- [E2B Documentation](https://e2b.dev/docs) - Code execution environments
- [Inngest Documentation](https://www.inngest.com/docs) - Background job processing

### API & State Management
- [tRPC Documentation](https://trpc.io/docs/) - Type-safe API layer
- [TanStack Query Documentation](https://tanstack.com/query/latest) - Data fetching and caching

### UI & Styling
- [Radix UI Documentation](https://www.radix-ui.com/docs) - Headless UI components
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS
- [shadcn/ui Documentation](https://ui.shadcn.com/) - Beautiful component library

### Authentication & Database
- [Clerk Documentation](https://clerk.com/docs) - User authentication and management
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - Database system

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy Auto AI is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure your environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

### Database Setup

For production, make sure to:
1. Set up a PostgreSQL database (e.g., Supabase, Neon, or Railway)
2. Run migrations: `npx prisma db push`
3. Update your `DATABASE_URL` environment variable

### Important Notes

- Ensure all environment variables are properly configured
- Set up Inngest webhook endpoints for background job processing
- Configure Clerk webhooks for user management
- Set up proper domain configuration for E2B sandboxes

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests if applicable
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain consistent code formatting with Prettier
- Write meaningful commit messages
- Update documentation when needed
- Test your changes thoroughly

## 🐛 Issues & Support

If you encounter any issues or have questions:

1. Check existing [GitHub Issues](https://github.com/PragyadiptaPradhan/auto-ai/issues)
2. Create a new issue with detailed description
3. Include steps to reproduce the problem
4. Add relevant logs and screenshots


**Built with ❤️ by the Auto AI**

*Empowering everyone to create amazing websites with the power of AI*
