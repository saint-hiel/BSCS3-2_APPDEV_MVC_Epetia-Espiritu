# YanaPortfolio — Yana's portfolio

The requested ASP.NET Core MVC structure hosts the existing portfolio. All
portfolio content, interactions, and rendering are JavaScript in `wwwroot/js`;
styling is in `wwwroot/css/site.css`. Only WHO I AM has image assets.
The C# files provide MVC routing and error handling, not portfolio UI logic.

## Visual Studio

1. Install the .NET 8 SDK and the ASP.NET/web development workload.
2. From the repository root, run `pnpm install`, then
   `pnpm build --config YanaPortfolio/vite.config.js`.
3. Open `YanaPortfolio.csproj` in Visual Studio and run the project.

The frontend build writes browser-ready CSS and JavaScript to `wwwroot-built`.
ASP.NET uses that directory as its static web root. Rebuild after frontend edits.
Do not serve the source `wwwroot` directly: it uses package imports and Tailwind.

## Figma Make

The existing Vite preview loads the same JavaScript through `src/main.tsx`.
It requires no .NET server. `pnpm build` builds that preview as before.
