import React, { FC, useEffect } from 'react';
import { Modal, SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from './EthosxPopupStyles';

import successIcon from '../assets/success.png';
import errorIcon from '../assets/error.png';
import warningIcon from '../assets/warning.png';
import questionIcon from '../assets/question.png';

import successBg from '../assets/success-bg.png';
import errorBg from '../assets/error-bg.png';
import warningBg from '../assets/warning-bg.png';
import questionBg from '../assets/question-bg.png';

export interface IPopupProps {
  type: 'success' | 'warning' | 'error' | 'question';
  position: 'bottom' | 'center';
  title: string;
  message: string;
  buttonText?: string;
  visible: boolean;
  duration?: number;
  onClosePress?(): void;
}

enum Colors {
  success = '#37A65A',
  error = '#F05454',
  warning = '#F5A652',
  question = '#B8B6FF'
}

const icons = {
  success: successIcon,
  error: errorIcon,
  warning: warningIcon,
  question: questionIcon
}

const iconsBg = {
  success: successBg,
  error: errorBg,
  warning: warningBg,
  question: questionBg
}

const EthosxPopup: FC<IPopupProps> = ({ title, message, buttonText, type, position, visible, duration, onClosePress }) => {
  useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
    Poppins_600SemiBold
	});

  useEffect(() => {
    if (visible && duration) {
      setTimeout(() => {
        onClosePress && onClosePress();
      }, duration)
    }
  }, [visible])

  return (
    <Modal transparent animationType="slide" visible={visible} testID="popup-component">
      <View style={styles.popupBackdrop}></View>

      <SafeAreaView style={[styles.popupContainer, { justifyContent: position === 'bottom' ? 'flex-end' : 'center' }]}>
        {
          position === 'center' &&
          <View style={styles.popupBoxCenter}>
            <View>
              <Image style={styles.popupBoxCenterIcon} source={icons[type]} />
            </View>

            <View style={styles.popupBoxCenterTextContainer}>
              <Text style={styles.popupBoxCenterTextTitle}>{title}</Text>
              <Text style={styles.popupBoxCenterTextMessage}>{message}</Text>
            </View>

            <View style={styles.popupBoxCenterButtonContainer}>
              <TouchableOpacity style={[styles.popupBoxCenterButton, { backgroundColor: Colors[type] }]}>
                <Text style={styles.popupBoxCenterButtonText}>{buttonText || 'Ok'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        }

      </SafeAreaView>

      {
        position === 'bottom' &&
        <View style={[styles.popupBoxBottom, { backgroundColor: Colors[type] }]}>
          <View style={styles.popupBoxBottomImageContainer}>
            <Image style={styles.popupBoxBottomIcon} source={icons[type]} />
            <Image style={styles.popupBoxBottomIconBg} source={iconsBg[type]} />
          </View>

          <View style={styles.popupBoxBottomTextContainer}>
            <Text style={styles.popupBoxBottomTextTitle}>{title}</Text>
            <Text style={styles.popupBoxBottomTextMessage}>{message}</Text>
          </View>

          <View style={styles.popupBoxBottomCloseButtonContainer}>
            <TouchableOpacity style={styles.popupBoxBottomCloseButton} onPress={() => { onClosePress && onClosePress() }}>
              <MaterialCommunityIcons name="close" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      }
    </Modal>
  );
}

export default EthosxPopup;