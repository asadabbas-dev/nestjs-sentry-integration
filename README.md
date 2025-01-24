# NestJS with Sentry.io Integration

This is a simple NestJS project demonstrating the integration of [Sentry.io](https://sentry.io/) for error monitoring and performance tracking.

## Features
- Integration with Sentry.io for real-time error tracking.
- Modular structure following NestJS best practices.
- Basic controllers and services for demonstration purposes.

## Tech Stack
- **NestJS**: A progressive Node.js framework.
- **Sentry.io**: Error tracking and performance monitoring.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file and add your Sentry DSN:
   ```
   SENTRY_DSN=<your-sentry-dsn>
   ```

4. Run the application:
   ```bash
   npm run start
   ```

## Usage
- Access the application at `http://localhost:3000`.
- Trigger errors to see them reported to your Sentry dashboard.

## Project Structure

├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── instrument.ts
│   ├── main.ts
├── test/
│   ├── app.e2e-spec.ts
│   ├── jest-e2e.json
├── .env                
├── .gitignore          
├── package.json        
├── README.md           
├── tsconfig.json 