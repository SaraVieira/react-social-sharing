# Import

```
import { Mail } from 'react-social-sharing'
```

# Use

You can change the subject by the `subject` prop and the body with the new `body` prop

```react
showSource: true
---
<Mail solidcircle link="http://sharingbuttons.io"/>
```

```react
showSource: true
---
<Mail simple solidcircle link="http://sharingbuttons.io"/>
```

```react
showSource: true
---
<Mail simpleReverse solidcircle link="http://sharingbuttons.io"/>
```

```react
showSource: true
---
<Mail solidcircle big subject="I am so cool" body="Check out http://sharingbuttons.io"/>
```

```react
showSource: true
---
<Mail solidcircle medium subject="I am so cool" link="http://sharingbuttons.io"/>
```

```react
showSource: true
---
<Mail solidcircle small subject="I am so cool" link="http://sharingbuttons.io"/>
```

```react
showSource: true
---
<Mail solid big subject="I am so cool" link="http://sharingbuttons.io"/>
```

```react
showSource: true
---
<Mail solid medium subject="I am so cool" link="http://sharingbuttons.io"/>
```

```react
showSource: true
---
<Mail solid small subject="I am so cool" link="http://sharingbuttons.io"/>
```

## Custom Props

```react
showSource: true
---
const styles = {
  background: 'black'
};

<Mail style={styles} link="http://sharingbuttons.io"/>
```
