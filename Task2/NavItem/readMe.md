Every React component has a type property, which means you can inspect
the type of a child component by iterating over the children with
React.Children.forEach .
Create the Nav and NavItem components we looked at earlier. The NavItem
should take a url prop and the link text as a child, then render an anchor tag ( a )
element with that text, and pointing to that url.
Next, modify the Nav component to check that every one of its children is a
NavItem , and throw an error if any other type of component is found.
As a test, the example code from earlier should work correctly:
<Nav>
<NavItem url='/'>Home</NavItem>
<NavItem url='/about'>About</NavItem>
<NavItem url='/contact'>Contact</NavItem>
</Nav>
And this code should throw an error:
<Nav>
<NavItem url='/'>Home</NavItem>
<NavItem url='/about'>About</NavItem>
<a href='/contact'>Contact</a>
</Nav>