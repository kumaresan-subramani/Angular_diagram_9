### Description

While dynamically changing the props, ngOnChanges hook not triggered in angular 9 but it properly triggered in angular 7.

Please refer the below image, here we have used button name hidden click to changes the property. 

![image](https://user-images.githubusercontent.com/53341125/95934502-9ea62c00-0dee-11eb-86de-10f5d95853fa.png)

In angular 7 the ngOnChanges hook are triggered properly from angular core level and I am getting changes from the changes parameter.

![image](https://user-images.githubusercontent.com/53341125/95934635-f80e5b00-0dee-11eb-817f-b9d823b85ba4.png)


![image](https://user-images.githubusercontent.com/53341125/95846868-9c4dbe80-0d69-11eb-88ef-ae8b37a60d19.png)

Angular 9:
Same as angular 9, ngOnChanges hook not triggered. At the time of property changes,

![image](https://user-images.githubusercontent.com/53341125/95935094-0d37b980-0df0-11eb-8750-2d3e07d721cd.png)


![image](https://user-images.githubusercontent.com/53341125/95846926-b38cac00-0d69-11eb-8dc6-7e9cdbc142ad.png)


## 🔬 Minimal Reproduction

Angular 7 sample: https://github.com/kumaresan-subramani/Angular_diagram_7
Angular 9 sample: https://github.com/kumaresan-subramani/Angular_diagram_9

## Steps to reproduce issue

- npm i
- ng serve

Then click button hidden to change the property, then you can reproduce the issue. 