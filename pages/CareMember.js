import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import MemberTA from './MemberTA';

function CareMember() {
  return (
    <FormControl component="fieldset">
      <MemberTA FullName="นาย ABC MMMMNO"/>
      <MemberTA FullName="นาย XXX YYYYZZZ"/>
      <MemberTA FullName="นาย CCC QWEQWE"/>

      <Button variant="contained" color="primary">บันทึก</Button>
    </FormControl>
  );
}
export default CareMember;