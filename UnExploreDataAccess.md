# Unexplore data access

The main sources for Extra-Galactic data are:
 - https://ned.ipac.caltech.edu/ui/
 - http://archive.eso.org/wdb/wdb/vo/goods_CDFS_master/form
 - http://archive.eso.org/eso/eso_archive_main.html

These places have data from many different sources and have converted the format to a more sensible format (hopefully).But it can be hard to extract large datasets from these archives since they are designed to work with a single object at a timeas you can see from [here][NEDhelp], which is most likely due to the vast amount of objects in he database a large query would take quite a while. So these are not too useful for what we would want.

The main source I have been using is from Stephen Wilkins website [here][SWwebsite], which I do have permission to use.

A few places which I found it is easiest to get the data, where whole datasets can be downloaded are as follows:
 - http://hedam.oamp.fr/HerMES/
 - http://swire.ipac.caltech.edu//swire/astronomers/data_access.html
 
Though the data may have strange formats and require some coding to extract 

I think the best option will be to use the indervidual website to access the data. But to often get large amounts of data you need to run a SQL query which means that knowledge of SQL is needed to access theses databases.

   [NEDhelp]:   <https://ned.ipac.caltech.edu/help/object_help.html>
   [SWwebsite]: <http://users.sussex.ac.uk/~sw376/KnownUniverse/universe.html>
