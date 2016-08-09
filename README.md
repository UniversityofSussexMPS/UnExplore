# UnExplore
University of Sussex Universe Explorer

This project is currently live and can be found [here][url]

The department has researchers working in many different areas of physics ranging from the cosmological to quantum scale. We would like to create an interactive webtool to travel through this different scale with the purpose of demonstrating all the research areas in Physics available at the University of Sussex.

This project uses [three.js][threejs] and [tween.js][tweenjs] to create the webtool of seemingly travelling through different scales in the universe. It also uses data from the [GAMA-survey][gama] to show the extragalatic scale.

This project assumes that the developer has good knowledge of javascript and intermediate knowlodge of HTML and css. To learn the things which are used in this website, I strongly advise looking at the examples and documentation in the following websites:
 - [three.js-examples][threejsex]
 - [learn-threejs][learn]
 - [tween.js-docs][tweenjs-docs]
 
Examples for tween.js can be found on its main github [page][github-tweenjs].

This project makes use of the 3D models in [three.js-examples][threejsex]. These are the steps which goes through adding and removing the models to reduce the amount that needs to be rendered:

1. Setup the scene
2. Add the model
3. Zoom so the model can no longer be seen
4. Remove the model
5. Reset the camera to be near the origin
6. Zoom out so the whole model can be seen
7. Then repeat step 3

[url]: <http://unexplore.com.s3-website-eu-west-1.amazonaws.com/>
[threejs]: <http://threejs.org/>
[tweenjs]: <http://www.createjs.com/tweenjs>
[github-tweenjs]: <https://github.com/tweenjs/tween.js>
[tweenjs-docs]: <https://github.com/tweenjs/tween.js/blob/master/docs/user_guide.md>
[gama]: <http://www.gama-survey.org/>
[threejsex]: <http://threejs.org/examples/
[learn]: <http://blog.teamtreehouse.com/the-beginners-guide-to-three-js>
