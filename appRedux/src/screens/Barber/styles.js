import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SwipeDot = styled.View`
  width: 11px;
  height: 11px;
  border-radius: 6px;
  background-color: #ffffff;
  margin: 3px;
`;

export const SwipeChevronleft = styled.View``;

export const SwipeDotActive = styled.View`
  width: 11px;
  height: 11px;
  border-radius: 6px;
  background-color: #000000;
  margin: 3px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63c2d1;
`;

export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const FakeSwiper = styled.View`
  width: 100%;
  height: 140px;
  background-color: #63c2d1;
`;

export const PageBody = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;

export const UserInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  background-color: #e7e7e7;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 2px;
  border-color: #ffffff;
`;

export const UserInfoName = styled.Text`
  font-size: 18px;
  color: #000000;
  font-weight: 700;
`;

export const UserFavButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  shadow-opacity: 0.75;
  elevation: 1;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
  top: 10px;
`;

export const ServiceArea = styled.View`
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
`;

export const ServiceAreaTitle = styled.Text`
  color: #4eadbe;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin: 30px 0;
`;

export const ServiceAreaContent = styled.View`
  flex-direction: row;
  margin: 5px 0;
`;

export const ServiceInfo = styled.View`
  flex: 1;
`;

export const ServiceTitle = styled.Text`
  color: #4eadbe;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
`;

export const ServicePrice = styled.Text`
  font-size: 14px;
  color: #268596;
  font-weight: 400;
`;

export const ServiceSheduleButton = styled.TouchableOpacity`
  background-color: #4eadbe;
  border-radius: 10px;
  width: 91px;
  height: 44px;
  padding: 10px 15px;
`;

export const ServiceSheduleTxt = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TestimonialArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextimonialItem = styled.View`
  background-color: #268596;
  border-radius: 10px;
  margin: 0 70px;
  padding: 10px;
  height: 100%;
`;

export const TestimonialHeader = styled.View`
  flex-direction: row;
  font-weight: 700;
  font-size: 14px;
  justify-content: space-between;
`;

export const TestimonialUserName = styled.Text`
  color: #ffffff;
`;

export const TestimonialBody = styled.Text`
  color: #ffffff;
  font-size: 12px;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;
