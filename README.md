# radio-buttons-react-native
Animated radio buttons component for react native

4 types animation when click on any items of radio button


# DEMO
![](https://user-images.githubusercontent.com/33284430/66270229-7ef73200-e883-11e9-98bf-4dddd01cd78c.gif)

# install
    npm install radio-buttons-react-native --save
    
# Usage
    import RadioButtonRN from 'radio-buttons-react-native';
    
    const data = [
    {
      label: 'data 1'
     },
     {
      label: 'data 2'
     }
    ];
    
    <RadioButtonRN
      data={data}
      selectedBtn={(e) => console.log(e)}
    />

see this simple [example](https://github.com/sramezani/radio-buttons-react-native/blob/master/example/index.js) to find how use this component.

<h3>with customize icon:</h3>

    // import icon from any library
    import Icon from 'react-native-vector-icons/FontAwesome';
    
    <RadioButtonRN
      data={data}
      selectedBtn={(e) => console.log(e)}
      icon={
        <Icon
          name="check-circle"
          size={25}
          color="#2c9dd1"
        />
      }
    />
    
    


# Properties

| Prop  | Description | Default |
| ------------- | ------------- | ------------- |
| data  | radio buttons label array, you can use any data in object, label is necessary for showing in radio button | [] |
| selectedBtn  | callback when radio button clicked | - |
| icon  | you can use any icon for button, see the example | - |
| box  | box of for items  | true |
| initial  | The number of selected radio button. start from 1 for first item of array. This is used when this component is activated. | -1 |
| animationTypes  | the animations when click on item, Valid values: 'zoomIn', 'pulse', 'shake', 'rotate', you can use one or more of this value for exaple: ['pulse'] or ['pulse', 'rotate']  | [] |
| duration  | For how long the animation will run (milliseconds) | 500 |
| style  | style for all RadioButtonRN  | {} |
| boxStyle  | style for box  | {} |
| textStyle  | style for label text  | {} |
| circleSize  | circle size for unselected items and whitout icon selected size | 18 |
| activeColor  | color of active button and box border  | '#03a9f4' |
| deactiveColor  | color of deactive button  | '#e2e2e2' |
| boxActiveBgColor  | background color of active item, when box is true | '#e1f5fe33' |
| boxDeactiveBgColor  | background color of deactive items, when box is true  | '#fff' |
| textColor  | label color  | '#383838' |

# Contributing
Yes of course! Welcome :)

# License
[MIT](https://github.com/sramezani/radio-buttons-react-native/blob/master/LICENSE)
