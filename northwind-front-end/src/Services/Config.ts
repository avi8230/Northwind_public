abstract class Config {
    
    public isDevelopment = (process.env.NODE_ENV === "development");
    public isProduction = (process.env.NODE_ENV === "production");

    public supportEmail = "support@northwind.com";

    public urls = { products: "", employees: "", employeeImages: "", register: "", login: "" };

    public constructor(baseUrl: string) {
        this.urls = {
            products: baseUrl + "products/",
            employees: baseUrl + "employees/",
            employeeImages: baseUrl + "employees/images/",
            register: baseUrl + "auth/register/",
            login: baseUrl + "auth/login/"
        };
    }

}

class DevelopmentConfig extends Config {
    public constructor() {
        super("http://localhost:3030/api/");
    }
}

// npm run build
class ProductionConfig extends Config {
    public constructor() {
        super("http://localhost:3030/api/");
        // super("http://www.northwind.com/api/");
    }
}
// **** Uploading the website to Firebase ****
// npm i -g firebase-tools
// firebase login
// firebase init

// Are you ready to proceed? Yes
// Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
// Use an existing project
// northwind-ap (Northwind-AP)
// What do you want to use as your public directory? build
// Configure as a single-page app (rewrite all urls to /index.html)? Yes
// Set up automatic builds and deploys with GitHub? No
// File build/index.html already exists. Overwrite? No

// firebase deploy

// Project Console: https://console.firebase.google.com/project/northwind-ap/overview
// Hosting URL: https://northwind-ap.web.app

// **** Updating and Deploying Again ****
// https://console.firebase.google.com/u/0/project/northwind-ap/hosting/sites
// npm run build
// firebase deploy

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;