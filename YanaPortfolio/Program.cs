using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    Args = args,
    WebRootPath = "wwwroot-built"
});
builder.Services.AddControllersWithViews();

var webRoot = Path.Combine(builder.Environment.ContentRootPath, "wwwroot-built");
if (!File.Exists(Path.Combine(webRoot, "js", "site.js")) ||
    !File.Exists(Path.Combine(webRoot, "css", "site.css")))
{
    throw new InvalidOperationException(
        "Portfolio assets are missing. From the YanaPortfolio folder, run " +
        "'pnpm install' and 'pnpm run build'.");
}

var app = builder.Build();
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(webRoot)
});
app.UseRouting();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.Run();
