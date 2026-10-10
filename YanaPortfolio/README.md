# YanaPortfolio

Self-contained .NET 8 MVC host for Yana's React/JavaScript portfolio.
No files outside this folder are required.

## First run on Windows

1. Install the .NET 8 SDK and Node.js 22.12 or newer.
2. Install pnpm if needed: `npm install -g pnpm`.
3. Extract this folder to a NEW location. Do not merge it into the old project.
4. Open a PowerShell terminal INSIDE YanaPortfolio, beside YanaPortfolio.csproj
   and package.json.
5. Run `pnpm install`.
6. Run `pnpm run build`. Wait for a successful Vite build.
7. Run `dotnet run --project ./YanaPortfolio.csproj`.
8. Open http://localhost:5055 after the server reports that it is listening.

Do not launch a separate Vite server. MVC serves the compiled frontend.
Normal .NET builds also run the frontend build automatically.

## Visual Studio

Install the ASP.NET and web development workload and .NET 8 SDK.
Complete steps 1–6 above, then open YanaPortfolio.csproj.
Select the YanaPortfolio launch profile and press Ctrl+F5.
Restart Visual Studio if pnpm was installed while it was open.

## Editing

JavaScript is in wwwroot/js and CSS is in wwwroot/css/site.css.
Only WHO I AM contains illustrations. The source uses React package imports
and Tailwind, so it must be compiled before browsers can use it.
Vite writes compiled assets to wwwroot-built. Do not manually edit that folder.
Rebuild and restart MVC after editing source.

## Troubleshooting

- Missing pnpm: install it and reopen your terminal.
- Build fails: resolve that error before starting MVC.
- Port occupied: stop the older server, or run
  `dotnet run --project ./YanaPortfolio.csproj --urls http://localhost:5056`.
- Blank page: disable cache in browser DevTools and refresh.
  /js/site.js must contain bundled code, not bare React package imports.
- PhysicalFileProvider is supplied by Microsoft.Extensions.FileProviders,
  imported at the top of Program.cs; no extra NuGet package is needed.

The package includes prebuilt browser assets for convenience. Frontend builds
were verified in Figma Make; .NET execution still requires local verification.
