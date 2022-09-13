import React, { useEffect, useState } from 'react';
import {userStore} from '../store/UserStore';
import {Button, Form, Input, Modal, Radio, Table} from 'antd';
import UserModel from "../model/UserModel";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../index.css";
import notification, { NotificationPlacement } from 'antd/lib/notification';
import Password from 'antd/lib/input/Password';

//FIXME: Test Page --> 실제 사용할 페이지로 네이밍하고 교체하기
interface prop {
  visible: boolean,
  userUniqueNum: number,
  setIsOpen: CallableFunction,
  setUserUniqueNum: CallableFunction,
  userModel?: UserModel,
}

const UserDialog = (props: prop) => {
  const {userList, addUser, updateUser, setUserList} = userStore();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(props.visible);
  const [name, setName] = useState(props.userModel === undefined ? "" : props.userModel.getUserName());
  const [userPw, setUserPw] = useState(props.userModel === undefined ? "" : props.userModel.getUserPw());
  const [phoneNumber, setPhoneNumber] = useState(props.userModel === undefined ? "" : props.userModel.getMobileNumber());


  useEffect(() => {
    if (props.userModel !== undefined) {
      setName(props.userModel.getUserName());
      setUserPw(props.userModel.getUserPw());
      setPhoneNumber(props.userModel.getMobileNumber());
    } else {
      resetInfo();
    }
    setIsModalVisible(props.visible);
  }, [props.userUniqueNum]);

  function onChangePhoneNumber(event: { target: { value: React.SetStateAction<string>; }; }) {
    setPhoneNumber(event.target.value);
  }

  function onChangeName(event: { target: { value: React.SetStateAction<string>; }; }) {
    setName(event.target.value);
  }

  function onChangeUserPw(event: { target: { value: React.SetStateAction<string>; }; }) {
    setUserPw(event.target.value);
  }

  function resetInfo() {
    setName("");
    setPhoneNumber("");
    setUserPw("");
  }

  function nameErrorNotification(placement: NotificationPlacement) {
    notification.warning({
      message: `입력정보가 올바르지 않습니다.`,
      description: '이름이 알맞지 않습니다.',
      placement,
      duration: 1.5,
    });
  }

  function phoneNumberErrorNotification(placement: NotificationPlacement) {
    notification.warning({
      message: `입력정보가 올바르지 않습니다.`,
      description: '휴대폰 번호가 알맞지 않습니다.',
      placement,
      duration: 1.5,
    });
  }

  function passwdErrorNotification(placement: NotificationPlacement) {
    notification.warning({
      message: `입력정보가 올바르지 않습니다.`,
      description: '비밀번호가 알맞지 않습니다.',
      placement,
      duration: 1.5,
    });
  }

  function okNotification(placement: NotificationPlacement) {
    notification.success({
      message: `${name} 님 환영합니다.`,
      description: '드럼빵에 가입해주셔서 감사합니다.',
      placement,
      duration: 1.5,
    });
  }

   function changeNotification(placement: NotificationPlacement) {
    notification.success({
      message: '수정 완료',
      description: `${name} 님의 정보가 수정되었습니다.`,
      placement,
      duration: 1.5,
    });
  }

  const handleOk = () => {
    if (name === "") {
      nameErrorNotification('top');
      return;
    }
    if (phoneNumber.length !== 13) {
      phoneNumberErrorNotification('top');
      return;
    }
    if (userPw.length < 4) {
      passwdErrorNotification('top');
      return;
    }
    if (props.userModel === undefined)
    {
      okNotification('top');
      addUser((new UserModel(props.userUniqueNum, phoneNumber, name, userPw)));
      props.setUserUniqueNum(props.userUniqueNum);
    } else {
      changeNotification('top');
      for (let i = 0; i < userList.length; i += 1) {
        if (userList[i].getUserUniqueNum() === props.userUniqueNum) {
          userList[i].setUserName(name);
          userList[i].setMobileNumber(phoneNumber);
          userList[i].setUserPw(userPw);
        }
      }
      setUserList(userList);
      // props.userModel.setUserName(name);
      // props.userModel.setMobileNumber(phoneNumber);
      // props.userModel.setUserPw(userPw);
      // updateUser(props.userModel);
    }
    // DB 송신 command가 필요
    closeModal();
  };

  const closeModal = () => {
    props.setIsOpen(false);
    setIsModalVisible(false);
  };

  return (
    <>
      {/* <Button onClick={showModal}>모달창 열기</Button> */}
      {/* isModalBisible이 true면 보임 */}
      <Modal className="modalStyle" bodyStyle={{ backgroundColor: 'papayawhip' }} title="회원 등록" visible={isModalVisible} onCancel={closeModal} onOk={handleOk}>
        <div className="flex flex-col">
          이름 입력: <input className="border border-solid rounded-md focus:outline-none focus:border-amber-600 border-amber-400" type="text" value={name} onChange={onChangeName} />
          핸드폰 번호 입력: <input className="border border-solid rounded-md focus:outline-none focus:border-amber-600 border-amber-400" type="text" value={phoneNumber} onChange={onChangePhoneNumber} />
          비밀번호 입력: <input className="border border-solid rounded-md focus:outline-none focus:border-amber-600 border-amber-400" type="password" value={userPw} onChange={onChangeUserPw} />
        </div>
      </Modal>
    </>
  );
};

export default UserDialog;

UserDialog.defaultProps = {
  userModel: undefined,
};