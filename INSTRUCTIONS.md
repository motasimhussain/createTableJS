Instructions
============

Step 1:
Add script to your html page!

Step 2:
Scratch your head!

Step 3:
call the function in your script like so:

```
createTable(tblRef,rows,columns,content);
```
Here,
  tableRef = reference to a table,This is a nullabe value in which case the function returns a table node.
  rows = Number of rows you want in your table.
  columns = Number of columns you want in your table.
  content = an object containing table's data/attributes
  
**content**
```
{
  head:[],     // Data for header of the table,it should be an array with length equal to the number of columns
  body:{       // Body of the table should be an object with individual rows as arrays
    r1:[],
    r2:[]
  },
  class: "",    // Class/Classes can be defined here using this option
  id:""         // Id can be defined here using this option
}
```
