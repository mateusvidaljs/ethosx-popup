import React, { FC, useEffect } from 'react';
import { EthosxPopup } from '../src';

const Example: FC = () => {
  return (
    <>
      <EthosxPopup
        message='Hello World!'
        position='bottom'
        title='Heeey!'
        type='success'
        visible
        duration={ 5000 }
        onClosePress={ () => console.log('Close Pressed!') }
      />
    </>
  );
}