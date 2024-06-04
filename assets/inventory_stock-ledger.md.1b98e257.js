import{_ as e,c as t,o as a,a as r}from"./app.4d84d1bf.js";var i="/books/assets/stock-ledger.856dd0a2.png";const y=JSON.parse('{"title":"Stock Ledger","description":"","frontmatter":{},"headers":[{"level":2,"title":"Filters","slug":"filters"},{"level":3,"title":"Ref Type","slug":"ref-type"},{"level":3,"title":"Ref Name","slug":"ref-name"},{"level":3,"title":"Item","slug":"item"},{"level":3,"title":"Location","slug":"location"},{"level":3,"title":"From Date","slug":"from-date"},{"level":3,"title":"To Date","slug":"to-date"},{"level":3,"title":"Group By","slug":"group-by"},{"level":3,"title":"Ascending Order","slug":"ascending-order"}],"relativePath":"inventory/stock-ledger.md","lastUpdated":1669883000000}'),n={name:"inventory/stock-ledger.md"},o=r('<h1 id="stock-ledger" tabindex="-1">Stock Ledger <a class="header-anchor" href="#stock-ledger" aria-hidden="true">#</a></h1><p>Stock Ledger is a report that displays all the stock entries that are recorded whenever an inventory transaction such as a Shipment or a Stock Movement is submitted.</p><p>The Stock Ledger shows you the change in quantity, value and valuation rate over the course of various inventory transactions.</p><p><img src="'+i+'" alt="Stock Ledger"></p><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-hidden="true">#</a></h2><p>The Stock Ledger has several filters which can help you narrow the generated report to the entries you would like to see.</p><h3 id="ref-type" tabindex="-1">Ref Type <a class="header-anchor" href="#ref-type" aria-hidden="true">#</a></h3><p>Setting Ref Type as anything other than All will display entries only of that Transactional entry type.</p><p>Example setting Ref Type as Shipment will display only entries created due to Shipment.</p><h3 id="ref-name" tabindex="-1">Ref Name <a class="header-anchor" href="#ref-name" aria-hidden="true">#</a></h3><p>Ref Name filter allows to display all ledger entries that were generated due to a single Transactional Entry.</p><p>To enable this you need to first set Ref Type.</p><h3 id="item" tabindex="-1">Item <a class="header-anchor" href="#item" aria-hidden="true">#</a></h3><p>Selecting a Item will display only entries involving the selected item.</p><h3 id="location" tabindex="-1">Location <a class="header-anchor" href="#location" aria-hidden="true">#</a></h3><p>Selecting a Location will display only entries involving the selected location.</p><h3 id="from-date" tabindex="-1">From Date <a class="header-anchor" href="#from-date" aria-hidden="true">#</a></h3><p>The initial date after which all the entries are to be displayed. The default value is one year before tomorrow.</p><h3 id="to-date" tabindex="-1">To Date <a class="header-anchor" href="#to-date" aria-hidden="true">#</a></h3><p>The final date before which all the entries are to be displayed. The default value is one day after today.</p><h3 id="group-by" tabindex="-1">Group By <a class="header-anchor" href="#group-by" aria-hidden="true">#</a></h3><p>Selecting a Group By option other than None groups the entry according to the selected option.</p><p>For instance setting Group By as Reference will group the entries by the Name of the Transactional entry.</p><h3 id="ascending-order" tabindex="-1">Ascending Order <a class="header-anchor" href="#ascending-order" aria-hidden="true">#</a></h3><p>By default the entries are displayed by newest entry first, i.e. descending order of Date.</p><p>Checking this will display the entries in ascending order of entry date.</p>',26),l=[o];function s(d,h,c,p,f,g){return a(),t("div",null,l)}var m=e(n,[["render",s]]);export{y as __pageData,m as default};
