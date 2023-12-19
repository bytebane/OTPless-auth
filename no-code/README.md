<h1>OTPless WordPress Integration</h1>

### Step 1 : Install OTPless WordPress Plugin

- Click [here](https://wordpress.com/plugins/otpless) or Navigate to `Add New Plugins` Search for `otpless` and **install** it.

### Step 2 : Activate Plugin

- Click on `Activate Plugin` and **Activate** it.

### Step 3 : Configure Plugin

- Navigate to `Settings>OTPless` and choose your desired integration options.

    <details close>
    <summary>Expand to Preview OTPless Settings</summary>
    <img src="./assets/otpless-wp-plugin-settings.png" alt="screenshot of otpless settings" />
    </details>

### Step 4 : Finally You can visit OTPless Dashboard for further configuration.

- Visit [OTPless Dashboard](https://otpless.com/dashboard/app) and signup with an ***email address associated with the domain of your WordPress site*** where you are planning to integrate OTPless Authentication.

- Navigate to Settings for your app and customize your integration.

<h1>OTPless Shopify Integration</h1>

### Step 1 : Install OTPless Shopify Plugin

- Visit [this link](https://apps.shopify.com/otpless-whatsapp-login) and install `OTPless Sign in` plugin.

    ![OTPless Sign in Plugin](./assets/shopify_1.png)
    ![Plugin Installation](./assets/shopify_2.png)

### Step 2 : Activate Plugin

- After installing, you will be redirected to the OTPless plugin settings.

    ![OTPless Plugin Settings](./assets/shopify_3.png)

- Navigate to the `App Embeds` page, by clicking on the link in Step 2 in the plugin settings page and **Turn On** `OTPless`.

    ![App Embeds](./assets/shopify_4.png)

<details close>
<summary><h2>OTPless Authentication Page</h2></summary>

### Thats it for OTPless login page integration

- In a new tab visit `{YOUR_STORE_DOMAIN}.com/account/' and you will be redirected to the OTPless login page.

    ![Login Page](./assets/shopify_5.png)

</details>

<details close>
<summary><h2>OTPless Authentication Widget</h2></summary>

### Follow the steps below to add OTPless widget in your login page.
> It can be integrated in any page.

### Step 3 : Deactivate default redirection

- Go to `OTPless plugin settings` page and expand the first question in the `Frequently Asked Questions` section and toggle the button on the right **OFF**. This deactivates the default redirection to OTPless authentication page.

    ![Deactivate Default Redirection](./assets/shopify_6.png)

- If you want a floating OTPless widget in your login page, you can skip the rest of this guide. Your `Login` page will look like this, you get a floating OTPless authentication widget:

    ![Login Page](./assets/shopify_7.png)

### Step 4 : Add OTPless Widget to Login Page

- Navigate to `Online store>Themes` and click `Customize` on your current theme.

    ![Customize Theme](./assets/shopify_8.png)

- From the Page Selection dropdown, navigate to `Classic customer accounts>Customer login` page.

    ![Customer Login Page](./assets/shopify_9.png)

- Hide the `Login` component from the Template section.
- Add OTPless Widget by clicking on `Add Section>Apps>OTPLESS Sign In`.

    ![Add OTPless Widget](./assets/shopify_10.png)
    ![OTPless Widget](./assets/shopify_11.png)

- Thats it. Save the changes. and visit your account page `{YOUR_STORE_DOMAIN}.com/account/login` to see the OTPless widget embedded in your login page.

    > LogIn Page
    ![Login Page](./assets/shopify_12.png)
    > Account Page
    ![Account Page](./assets/shopify_13.png)

> Similarly, you can add OTPless widget in any page.

</details>

### Step 5 : Finally You can visit OTPless Dashboard for further configuration.

- Visit [OTPless Dashboard](https://otpless.com/dashboard/app) and signup with an ***email address associated with the domain of your Shopify store*** where you are planning to integrate OTPless Authentication.

- Navigate to Settings for your app and customize your integration.
