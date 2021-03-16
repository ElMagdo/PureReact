Make a component to display an “error box” that looks like this:  

![Sample Error Box](error.png)

Invoking the component should look like this:  

`<ErrorBox>`  
Something has gone wrong  
`</ErrorBox>`  

Use the `children` prop to place the text properly. The image above 
uses [Bootstrap](http://getbootstrap.com/getting-started/#download-cdn) 
for styling and [Font Awesome](https://www.bootstrapcdn.com/fontawesome/) 
for the icon. You can add these libraries to your public/index.html file for 
the styling icon if you like.