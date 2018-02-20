# SmartSuite Widget: Recommend List 
## Service Requirement
### Functions
- A table view of recommended books
- Able to display 20 Books
- Able to click book to launch detail page in a new tab
- Able to refresh automatically to update holdings
- Order by holdings to show more popular books on top
- Professional UI

## Design Specification
### Functions
- Show data in table similar like Excel
- Able to show 20 books
- Able to scroll if not fit into the configured size
- Able to click on the row to launch detail page of book in new tab
- Less available copy books comes to the top

### UI 
- <div></div> as a container must be used.
- <table></table> must be used as display data
- Min-width of table will be 400px;
- BootStrap table used
- Header of table is a info row
- Table-hover used
- Available copy must in red
- Refresh table every 30 seconds
- Header clickable to launce order by different column 
- Default order is available copies
- Cover need to be shown in a small size (100*150) or (150*150)
- Hover on cover will load cover bigger (200*300) or (300*300) near curse in a popup or popover
- Each row is 150px most height. Trim or hide is text is not able to fit.
- No recommendation will show if no result return.
- Dynamic size is configurable for container
- Multiple containers is possible on one page.
- Needs to look clean and professional.

### Service URL
http://vcld.fsdcmel.librarysolutions.com.au/VCLD_FS_TEST/SmartLibrary/Services/Search/SMLIB_SERVICE_SEARCH.asmx/GetRecommendList
### Request Type
- POST
### Request Data Type
- JSON
### Request JSON Sample
```javascript
{
	count：20
}
```
### Response Data Type
- JSON
### Response JSON Sample
```javascript
{
            count: 2,
            items: [
                {
		   bookid: "1.01",
                    title: "Cats",
                    author: "CROSER, NIGEL",
                    media: "Book",
		    location: "Fiction",
                    sub-location: "Animal",
                    isbn: "1863742417",
                    availablecopy: "2",
                    cover: "http://vcld.fsdcmel.librarysolutions.com.au/ISBNCovers/1863742417.jpg",
                    detail: "SmartLibraryPageLoader.aspx?PageName=TITLE_DETAIL&BookID=7567.01",
                },
                {
                    bookid: "2.01",
                    title: "Space cat",
                    author: "Kenny, Heath",
                    media: "Book",
		    location: "Non-Fiction",
                    sub-location: "Space",
                    isbn: "1869442873",
                    availablecopy: "1",

                    cover: "http://vcld.fsdcmel.librarysolutions.com.au/ISBNCovers/1869442873.jpg",
                    detail: "SmartLibraryPageLoader.aspx?PageName=TITLE_DETAIL&BookID=67582.01",
                }
            ]
}


```
### Project Output
- Code up JQUERY plug-in in pre-defined jquery file. (SMLIBFWW_RECOMMENDLIST_JQUERY_MAIN.js)
- Multiple Jquery files are acceptable, but all of them needs to sit inside SMLIB_Web_JS\SMLIBFWW_WIDGET\SMLIB_FW_WIDGET_RECOMMENDLIST\JQUERY folder
- Multiple files need to bind and minify to min file.
- CSS file needs to be in SMLIB_Web_JS\SMLIBFWW_WIDGET\SMLIB_FW_WIDGET_RECOMMENDLIST\CSS folder
- CSS file needs to to bind and minify to min file.
- Loader File needs to be in SMLIB_Web_JS\SMLIBFWW_WIDGET\SMLIB_FW_WIDGET_RECOMMENDLIST\LOADER folder
- Loader file able to load js min file and css min file.
- WidgetTest.html is the test file.
- WidgetTest.html is able to load relative framework and files.
- WidgetTest.html It should be run independently
- Plug-in will called as 
```javascript
$("#main").smlib_recommendlist(
{
	position: "relative",
	width: 1000,
	height: 800,
	top: 20,
	left: 20,
	additional_css: "",       
	bgfile: "",
	webroot: "",
	widgetroot: "SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_READINGDESK/",
	getrecommendlistservice: 'http://vcld.fsdcmel.librarysolutions.com.au/VCLD_FS_TEST/SmartLibrary/Services/Search/SMLIB_SERVICE_SEARCH.asmx/GetRecommendList'      
}
);

```


