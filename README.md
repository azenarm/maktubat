<div dir="rtl">

# توضیحات آزمایش

ما برای این آزمایش تصمیم گرفتیم یک سایت واقعی که در آینده هم کاربرد داشته باشد بسازیم. برای اینکار تصمیم به استفاده از tinacms که یک سیستم مدیریت محتوای opensource است گرفتیم.

##دیپلوی

این cms قابلیت دیپلوی روی github pages را هم داشت که توضیحاتش در لینک زیر موجود است.
https://tina.io/docs/tina-cloud/deployment-options/github-pages
با دنبال کردن آموزش هایی که در داکیومنت tina وجود داشت سایت را در آدرس زیر بالا آوردیم:
https://azenarm.github.io/maktubat/
در واقع اکشن دیفالت دیپلوی nextjs روی github pages به علاوۀ بیلد خود tinacms مورد استفاده قرار گرفت که در بخش اکشن ها با عنوان deploy nextjs app موجود است.

در این مسیر به مشکلات زیادی خوردیم که خیلی از آن ها با دنبال کردن راه حل هایی که در داکیومنت پیدا میشد حل شدند ولی در نهایت یک مشکل عجیب باقی ماند که حتی در کامیونیتی discord خود tina هم راه حلش را پیدا نکردیم.
اینکه تغییرات محتوایی در سایت منعکس نمیشدند. یعنی در حالت لوکال درست است ولی در سایت نه. در نهایت بعد از حدود یک روز این مشکل همچنان باقی است و اگر به سایت مراجعه کنید پست های پیش فرض تینا را میبینید.
اما به هر حال ساختار اصلی آماده شده و در لوکال هم پست های درست نمایش داده میشوند.
توضیح ساختار tinacms احتمالا در حوزۀ این گزارش جا نخواهد داشت ولی پنل مدیریت محتوا هم در آدرس زیر قرار دارد:
https://azenarm.github.io/maktubat/admin

##برنچ ها
###tina
این برنچ در واقع برنچی بود که خود tinacms به ازای هر آپدیت در پنل یک کامیت در آن ثبت میکرد که در نهایت وقتی تصمیم به انتشار نسخه میگرفتیم آن را با main مرج میکردیم.

###dev/_
کل فرایند توسعه را روی برنچ هایی با این فرمت انجام میدادیم که به جای _ توضیحی در مورد کار مورد نظر قرار میگرفت.

###hotfix/\*
اصلاحات جزئی روی برنچ هایی با این فرمت انجام میشد.

##کانبان
https://github.com/orgs/azenarm/projects/1

# پاسخ سوالات

1. پوشه git یک پوشه مخفی است که در ریشه پروژه قرار دارد و به عنوان هسته اصلی git شناخته می‌شود.\
   در این پوشه تمامی اطلاعات مورد نیاز برای مدیریت تاریخچه پروژه قرار دارد. این اطلاعات شامل مواردی مانند تاریخچه و اطلاعات commitها، اطلاعات شاخه‌ها، اطلاعات مربوط به remote repositories, تنظیمات پروژه و ایندکس‌های staging است.
1. منظور از اتومیک بودن هر کامیت این است که هر کامیت یک کار مشخص و مستقل را انجام دهد و به راحتی قابل برگشت باشد. همچنین باعث نشود پروژه در یک وضعیت ناپایدار قرار گیرد.\
   منظور از automic pull-request این است که یک pull-request شامل تغییراتی باشد که بر یک موضوع خاص متمرکز است و شامل چند تغییر بی‌ربط نباشد.
1. دستور fetch فقط تغییرات جدید را از remote دریافت می‌کند ولی آن‌ها را در شاخه فعلی اعمال نمی‌کند.\
   ولی دستور pull علاوه بر دریافت تغییرات از remote، آن‌ها را روی شاخه فعلی اعمال می‌کند.\
   دستور merge دو شاخه را ترکیب می‌کند و یک کامیت جدید می‌سازد.\
   دستور rebase بدون merge commit تاریخچه یک شاخه را روی یک شاخه دیگر بازنویسی می‌کند.\
   دستور cherry-pick یک یا چند کامیت خاص را از شاخه دیگر کپی کرده و به شاخه فعلی اضافه می‌کند.
1. دستور reset می‌تواند HEAD را به کامیت قبلی ببرد یا فایل‌های تغییر یافته یا استیج را تغییر دهد.\
   دستور revert یک کامیت خاص را معکوس کرده و در یک کامیت جدا اعمال می‌کند.\
   restore برای برگرداندن فایل‌ها به نسخه‌ای خاص استفاده می‌شود.\
   دستور switch برای تغییر بین شاخه‌ها استفاده می‌شود.\
   دستور checkout هم برای تغییر بین شاخه‌ها یا بازگرداندن فایل‌های استفاده می‌شود.
1. stage مرحله‌ای است بین تغییر فایل‌ها و کامیت کردن آن‌ها. در واقع برای کامیت‌کردن تغییر ابتدا تغییراتی که می‌خواهیم در این کامیت باشد را در مرحله stage قرار می‌دهیم و سپس کامیت می‌کنیم.\
   کاربرد stash این است که تغییرات فعلی که وجود دارد (چه در استیج یا غیر آن) را موقتا ذخیره می‌کند و workspace را تمیز می‌کند. برای زمانی مناسب است که می‌خواهیم کار نیمه‌تمامی را نگه داریم و سراغ کار دیگری برویم.
1. snapshot به معنای وضعیت کامل از تمام فایل‌های پروژه است. در واقع هر commit یک snapshot کامل از پروژه است که متن commit و نویسنده آن‌مشخص است. بر خلاف تصور، commitها فقط تفاوت‌ها را نگه نمی‌دارند و تمام فایل‌ها را شامل می‌شوند.
1. local repository همان repository است که ما در سیستم خودمون ذخیره کرده‌ایم. اما remote repository، repository است که در یک سرور ذخیره شده است و بین بقیه افراد به اشتراک گذاشته شده است. با دستوراتی مثل fetch, pull, push و ... می‌توانیم local repository خودمان را با remote repository همگام کنیم و به صورت گروهی پروژه را به اشتراک بگذاریم.

</div>

# Tina Starter 🦙

![tina-cloud-starter-demo](https://user-images.githubusercontent.com/103008/130587027-995ccc45-a852-4f90-b658-13e8e0517339.gif)

This Next.js starter is powered by [TinaCMS](https://app.tina.io) for you and your team to visually live edit the structured content of your website. ✨

The content is managed through Markdown and JSON files stored in your GitHub repository, and queried through Tina GraphQL API.

### Features

- [Tina Headless CMS](https://app.tina.io) for authentication, content modeling, visual editing and team management.
- [Vercel](https://vercel.com) deployment to visually edit your site from the `/admin` route.
- Local development workflow from the filesystem with a local GraqhQL server.

## Requirements

- Git, [Node.js Active LTS](https://nodejs.org/en/about/releases/), pnpm installed for local development.
- A [TinaCMS](https://app.tina.io) account for live editing.

## Local Development

Install the project's dependencies:

> [!NOTE]  
> [Do you know the best package manager for Node.js?](https://www.ssw.com.au/rules/best-package-manager-for-node/) Using the right package manager can greatly enhance your development workflow. We recommend using pnpm for its speed and efficient handling of dependencies. Learn more about why pnpm might be the best choice for your projects by checking out this rule from SSW.

```
pnpm install
```

Run the project locally:

```
pnpm dev
```

### Local URLs

- http://localhost:3000 : browse the website
- http://localhost:3000/admin : connect to Tina Cloud and go in edit mode
- http://localhost:3000/exit-admin : log out of Tina Cloud
- http://localhost:4001/altair/ : GraphQL playground to test queries and browse the API documentation

## Deployment

### GitHub Pages

This starter can be deployed to GitHub Pages. A GitHub Actions workflow is included that handles the build and deployment process.

To deploy to GitHub Pages:

1. In your repository settings, ensure GitHub Pages is enabled and set to deploy from the `gh-pages` branch
2. Push changes to your main branch - the workflow will automatically build and deploy the site

> [!NOTE]
> When deploying to GitHub Pages, you'll need to update your secrets in Settings | Secrets and variables | Actions to include:
>
> - `NEXT_PUBLIC_TINA_CLIENT_ID`
> - `TINA_TOKEN`
>
> You get these from your TinaCloud project - [read the docs](https://tina.io/docs/tina-cloud/deployment-options/github-pages)

> [!IMPORTANT]
> GitHub Pages does not support server side code, so this will run as a static site. If you don't want to deploy to GitHub pages, just delete `.github/workflows/build-and-deploy.yml`

### Building the Starter Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```
NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
NEXT_PUBLIC_TINA_BRANCH=<Specify the branch with Tina configured>
```

Build the project:

```bash
pnpm build
```

## Getting Help

To get help with any TinaCMS challenges you may have:

- Visit the [documentation](https://tina.io/docs/) to learn about Tina.
- [Join our Discord](https://discord.gg/zumN63Ybpf) to share feedback.
- Visit the [community forum](https://community.tinacms.org/) to ask questions.
- Get support through the chat widget on the TinaCMS Dashboard
- [Email us](mailto:support@tina.io) to schedule a call with our team and share more about your context and what you're trying to achieve.
- [Search or open an issue](https://github.com/tinacms/tinacms/issues) if something is not working.
- Reach out on Twitter at [@tina_cms](https://twitter.com/tina_cms).

## Development tips

### Visual Studio Code GraphQL extension

[Install the GraphQL extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) to benefit from type auto-completion.

### Typescript

A good way to ensure your components match the shape of your data is to leverage the auto-generated TypeScript types.
These are rebuilt when your `tina` config changes.

## LICENSE

Licensed under the [Apache 2.0 license](./LICENSE).
