import { useState } from 'react';
import { Button, Checkbox, Inform, Input, Radio, RadioGroup, TextArea } from './components';
import { EyeOpen } from './icons';

function App() {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Male')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  }

  return (
    <div>
        {/* <Button size={54} type='primary' startIcon={<EyeOpen />} href='https://www.google.com/'>asd</Button> */}

        {/* INPUT */}
        {/* <Input placeholder='Nhập họ tên' withLabel onClear={() => {}} />
        <Input value='asd' placeholder='Nhập họ tên' withLabel onClear={() => {}} />
        <Input placeholder='Nhập họ tên' onClear={() => {}} onChange={e => setValue(e.currentTarget.value)}/>
        <Input value='asd' placeholder='Nhập họ tên' onClear={() => {}} /> */}

        {/* <TextArea value={value} label='LabelName' placeholder='This is placeholder' showLengthCounter onChange={e => setValue(e.currentTarget.value)}/>
        <TextArea placeholder='This is placeholder' showLengthCounter hint='asd'/> */}

        {/* <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} label={"Label"}/>
        <Checkbox checked={isChecked} disabled onChange={() => setIsChecked(!isChecked)} label={"Label"}/>

        <RadioGroup onChange={handleChange} value={selectedValue}>
          <Radio label='Male' name='Gender' value='Male'/>
          <Radio label='Female' name='Gender' value='Female'/>
        </RadioGroup> */}

        <Inform severity='info' icon={<EyeOpen />} content='Informative inform with dismiss button'/>
    </div>
  );
}

export default App;
