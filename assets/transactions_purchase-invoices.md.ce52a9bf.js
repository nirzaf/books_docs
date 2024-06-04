import{_ as e,a}from"./chunks/auto-payment.520e4c6f.js";import{_ as t,c as n,o as i,a as s}from"./app.4d84d1bf.js";var r="/books/assets/purchase-invoice.2f97fcc3.png",c="/books/assets/purchase-payment.f16a7cdc.png",o="/books/assets/purchase-payment-quickedit.d02f6fa7.png",u="/books/assets/pinv-create-return.13bf52d2.png",h="/books/assets/pinv-return-form.9ea277ff.png",l="/books/assets/pinv-select-return-against-invoice.085def17.png",p="/books/assets/pinv-return-in-gl.32228f2e.png";const w=JSON.parse('{"title":"Purchase Invoices","description":"","frontmatter":{},"headers":[{"level":2,"title":"Creating Purchase Invoices","slug":"creating-purchase-invoices"},{"level":2,"title":"Making Purchase Payments","slug":"making-purchase-payments"},{"level":3,"title":"Auto Payments","slug":"auto-payments"},{"level":2,"title":"Purchase Invoice Return","slug":"purchase-invoice-return"},{"level":3,"title":"Creating a Purchase Invoice Return","slug":"creating-a-purchase-invoice-return"},{"level":3,"title":"Creating Manually","slug":"creating-manually"},{"level":2,"title":"Purchase Invoice impact on General Ledger","slug":"purchase-invoice-impact-on-general-ledger"}],"relativePath":"transactions/purchase-invoices.md","lastUpdated":1701687894000}'),d={name:"transactions/purchase-invoices.md"},m=s('<h1 id="purchase-invoices" tabindex="-1">Purchase Invoices <a class="header-anchor" href="#purchase-invoices" aria-hidden="true">#</a></h1><p>Purchase Invoices are bills that your supplier sends you when you make a purchase.</p><p>It is a transactional entry that denotes a purchase.</p><h2 id="creating-purchase-invoices" tabindex="-1">Creating Purchase Invoices <a class="header-anchor" href="#creating-purchase-invoices" aria-hidden="true">#</a></h2><p>If you have set up your Frappe Books with Accounts, Taxes, Purchase Items, and Suppliers, creating a Purchase Invoice is as simple as it gets.</p><p>First navigate to the Purchase Invoices page</p><p><code>Purchases &gt; Purchase Invoices</code></p><p>Then click on the blue <code>+</code> button to open the Purchase Invoice form.</p><p><img src="'+r+'" alt="Purchase Invoice Form"></p><ol><li>Select the Supplier from whom you will be making a purchase.</li><li>Click on Add Row and select the Item being purchased. Default Tax will be fetched you can change it if required.</li><li>Enter the Quantity.</li><li>You can add more items or if you are done, click on Save.</li><li>Once finalized, click on Submit. Frappe Books will do the required ledger entries against the appropriate accounts.</li></ol><p>This invoice is now in <em>\u201CSubmitted\u201D</em> state, it cannot be edited. The purchase transaction has been recorded.</p><h2 id="making-purchase-payments" tabindex="-1">Making Purchase Payments <a class="header-anchor" href="#making-purchase-payments" aria-hidden="true">#</a></h2><p>Once a purchase invoice has been submitted, you\u2019ll need to record payment against it to denote that you\u2019ve paid the money.</p><p>To make a Payment first navigate to the Purchase Invoice, then click on the <code>...</code> menu button. Then click the Make Payment option.</p><p><img src="'+c+'" alt="Purchase Invoice Status"></p><p>This will open the Payment quick edit form with the outstanding amount auto-filled.</p><p><img src="'+o+'" alt="Purchase Invoice Payment"></p><p>You can change the values and click on Save. This will Save and Submit the Payment.</p><p>On making the Payment, Frappe Books will make the necessary ledger entries to increase the payment amount in Accounts Payable and decrease the amount in your Bank or Cash Account.</p><p>It will also update the Outstanding Amount on the invoice form.</p><div class="info custom-block"><p class="custom-block-title">Purchase Invoice Status</p><p>Until Payments are made to settel the Outstanding Amount, the Purchase Invoice will be in the <strong>Unpaid</strong> state.</p><p>Once the Outstanding Amount reaches 0, the status will change to <strong>Paid</strong>.</p></div><h3 id="auto-payments" tabindex="-1">Auto Payments <a class="header-anchor" href="#auto-payments" aria-hidden="true">#</a></h3><p>You can simplify the <em>Purchase Invoice \u2192 Payment</em> workflow by using Auto Payments. For this you just need to set the default accounts for Purchase Payment.</p><p>This can be done in <code>Setup &gt; Settings &gt; Defaults &gt; Auto Payments</code>: <img src="'+e+'" alt="Payment Accounts"></p><p>Once this is set, whenever you Submit a Purchase Invoice a Payment entry will automatically be created.</p><div class="tip custom-block"><p class="custom-block-title">Disable Auto Payment for a Purchase Invoice</p><p>You can disable Auto Payment for a single Purchase Invoice by unchecking the Make Payment On Submit check box in the Settings tab before Submitting the Purchase Invoice entry.</p><p><img src="'+a+'" alt="Disable Auto Payment"></p></div><h2 id="purchase-invoice-return" tabindex="-1">Purchase Invoice Return <a class="header-anchor" href="#purchase-invoice-return" aria-hidden="true">#</a></h2><p>The user can create a Purchase Invoice Return directly from the original Purchase Invoice document or manually from the New Purchase Invoice Entry.</p><h3 id="creating-a-purchase-invoice-return" tabindex="-1">Creating a Purchase Invoice Return <a class="header-anchor" href="#creating-a-purchase-invoice-return" aria-hidden="true">#</a></h3><ol><li>Open the original Purchase Invoice document.</li><li>Click on <strong>Create &gt; Return</strong>. <img src="'+u+'" alt="Create Purchase Invoice Return"></li><li>The Party and Item details will be fetched as set in the original Purchase Invoice document. You can set the quantity of Items returned in negative numbers. <img src="'+h+'" alt="Purchase Invoice Return Form"></li><li>Save and Submit.</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The Item quantity and Payment amount will be in negative figures to indicate that it&#39;s a return.</p></div><h3 id="creating-manually" tabindex="-1">Creating Manually <a class="header-anchor" href="#creating-manually" aria-hidden="true">#</a></h3><ol><li>Navigate to the Purchase Invoice page <code>Purchases &gt; Purchase Invoice</code></li><li>Click on <strong>Return Against</strong> then select the target Purchase Invoice against which you returned the Items. <img src="'+l+'" alt="Set Is Return"></li><li>Fill Item details.</li><li>Save and Submit.</li></ol><h2 id="purchase-invoice-impact-on-general-ledger" tabindex="-1">Purchase Invoice impact on General Ledger <a class="header-anchor" href="#purchase-invoice-impact-on-general-ledger" aria-hidden="true">#</a></h2><p>The Purchase Invoice Return entry will create General Ledger entries to reverse the impact of the original Purchase Invoice.</p><p><img src="'+p+'" alt="Purchase Invoice Return in General Ledger"></p>',36),g=[m];function v(P,y,b,f,I,_){return i(),n("div",null,g)}var T=t(d,[["render",v]]);export{w as __pageData,T as default};
