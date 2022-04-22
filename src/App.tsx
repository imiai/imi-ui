import { useState } from 'react';
import { BottomSheet, Button, Card, Checkbox, Inform, Input, Popup, Radio, RadioGroup, Snackbar, TextArea } from './components';
import { EyeOpen, Check } from './icons';

function App() {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Male')
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  }

  return (
    <div style={{background: '#E5E5E5', height: '100vh'}}>
        {/* <Button size={54} type='primary' startIcon={<EyeOpen />} href='https://www.google.com/'>asd</Button> */}

        {/* INPUT */}
        <Input placeholder='Nhập họ tên' withLabel onClear={() => {}} />
        <Input value='asd' placeholder='Nhập họ tên' withLabel onClear={() => {}} />
        <Input placeholder='Nhập họ tên' onClear={() => {}} onChange={e => setValue(e.currentTarget.value)}/>
        <Input value='asd' placeholder='Nhập họ tên' onClear={() => {}} />

        <TextArea value={value} label='LabelName' placeholder='This is placeholder' showLengthCounter onChange={e => setValue(e.currentTarget.value)}/>
        <TextArea placeholder='This is placeholder' showLengthCounter hint='asd'/>

        <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} label={"Label"}/>
        {/* <Checkbox checked={isChecked} disabled onChange={() => setIsChecked(!isChecked)} label={"Label"}/>*/}

        <RadioGroup onChange={handleChange} value={selectedValue}>
          <Radio label='Male' name='Gender' value='Male'/>
          <Radio label='Female' name='Gender' value='Female'/>
        </RadioGroup> 

        <Inform severity='info' icon={<EyeOpen />} content='Informative inform with dismiss button'/>

        <Button type='primary' size={54} onClick={() => setIsOpenPopup(true)}>Open Popup</Button>
        <Popup open={isOpenPopup} onClose={() => setIsOpenPopup(false)} imageSize='large' title='Large Popup' subTitle='This message of the popup is wrapped by the container.' mainButton='Main button' subButton='Sub button'/>

        <Button type='primary' size={54} onClick={() => setIsOpenSheet(true)}>Open Sheet</Button>
        <BottomSheet open={isOpenSheet} onClose={() => setIsOpenSheet(false)} title='title'>
          <div>
            content
          </div>
        </BottomSheet>

        <Button type='primary' size={54} onClick={() => setIsOpenSnackbar(true)}>Open Snackbar</Button>
        <Snackbar open={isOpenSnackbar} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} onClose={() => setIsOpenSnackbar(false)} titleClassName={'c-status-success'} icon={<Check />} title={'Account successfully created'} content={'Please login to your email to verify your email.'}/>
        <Card>
          Card Content
        </Card>
    </div>
  );
}

export default App;
