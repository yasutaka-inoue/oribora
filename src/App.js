import React from "react";
import { Button } from "@material-ui/core";
import { withRouter } from 'react-router-dom';
import Title from './common/Title'
import { makeStyles } from '@material-ui/core/styles';

// ログイン時に取得したidを連れまわす
    // 仮id
    const volunteerId= "aaa";
    const guestId= "zzz";

// style
const useStyles = makeStyles((theme) => ({
  margin:{
      marginBottom: 150,
  },
  button:{
    display: "block",
    margin: "0 auto",
  },
  text:{
    textAlign: "center",
  }
}));

const App = (props) => {
  const classes = useStyles();

      //ゲストへ遷移
      const gotoGuest=()=>{
        props.history.push({
            // detailに遷移。idを渡す。
            pathname: '/guest',
            state: { myId: guestId }
        });
    }

    // ボランティアへ遷移
    const gotoVolunteer=()=>{
        props.history.push({
            //vulnteerに遷移。値を渡す。
            pathname: '/volunteer',
            state: {myId: volunteerId}
        })
    }
    


  return (
    <>
      <Title title="ログイン（仮）"/>
      <div className={classes.margin}></div>
        <Button variant="contained" color="primary" size="large" onClick={gotoVolunteer} className={classes.button}>
          ボランティア
        </Button>
        <p className={classes.text}>or</p>
        <Button variant="contained" color="secondary" size="large" onClick={gotoGuest} className={classes.button}>
          ゲスト
        </Button>
    </>
  );
};

export default withRouter(App);
