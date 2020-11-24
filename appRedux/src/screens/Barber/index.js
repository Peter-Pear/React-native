import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Stars from '../../components/Stars';
import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import PrevIcon from '../../assets/nav_prev.svg';
import NextIcon from '../../assets/nav_next.svg';

import {
  Container,
  Scroller,
  SwipeDot,
  SwipeDotActive,
  SwipeItem,
  SwipeImage,
  FakeSwiper,
  PageBody,
  UserInfoArea,
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserFavButton,
  ServiceArea,
  ServiceAreaTitle,
  ServiceAreaContent,
  ServiceInfo,
  ServiceTitle,
  ServicePrice,
  ServiceSheduleButton,
  ServiceSheduleTxt,
  TestimonialArea,
  TextimonialItem,
  TestimonialHeader,
  TestimonialUserName,
  TestimonialBody,
  BackButton,
  LoadingIcon,
} from './styles';

import Api from '../../Api';

import {roundToNearestPixel} from 'react-native/Libraries/Utilities/PixelRatio';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  const [loading, setLoading] = useState(false);

  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true); //start loading effect before fetching user data

      let json = await Api.getBarber(userInfo.id); //fetching user data

      if (json.error == '') {
        //validating Api fetch
        setUserInfo(json.data); //maping to local state
        setFavorited(json.data.favorited);
      } else {
        alert('Error:' + json.error);
      }

      setLoading(false); //stop laoding effect
    };
    getBarberInfo();
  }, []);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleFavClick = () => {
    setFavorited(!favorited);
  };

  return (
    <Container>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{height: 240}}
            dot={<SwipeDot />}
            activeDot={<SwipeDotActive />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={true}>
            {userInfo.photos.map((item, key) => (
              <SwipeItem key={key}>
                <SwipeImage source={{uri: item.url}} resizeMode="cover" />
              </SwipeItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwiper></FakeSwiper>
        )}
        <PageBody>
          <UserInfoArea>
            <UserAvatar source={{uri: userInfo.avatar}} />
            <UserInfo>
              <UserInfoName>{userInfo.name}</UserInfoName>
              <Stars stars={userInfo.stars} showNumber={true} />
            </UserInfo>
            <UserFavButton onPress={handleFavClick}>
              {favorited ? (
                <FavoriteFullIcon width="24" height="24" fill="#FF0000" />
              ) : (
                <FavoriteIcon width="24" height="24" fill="#FF0000" />
              )}
            </UserFavButton>
          </UserInfoArea>
          {loading && <LoadingIcon size="large" color="#63c2d1" />}
          {userInfo.services && (
            <ServiceArea>
              <ServiceAreaTitle>Lista de Serviços</ServiceAreaTitle>
              {userInfo.services.map((item, key) => (
                <ServiceAreaContent key={key}>
                  <ServiceInfo>
                    <ServiceTitle>{item.name}</ServiceTitle>
                    <ServicePrice>{item.price}€</ServicePrice>
                  </ServiceInfo>
                  <ServiceSheduleButton>
                    <ServiceSheduleTxt>Agendar</ServiceSheduleTxt>
                  </ServiceSheduleButton>
                </ServiceAreaContent>
              ))}
            </ServiceArea>
          )}
          {userInfo.testimonials && userInfo.testimonials.length > 0 && (
            <TestimonialArea>
              <Swiper
                style={{height: 110}}
                showsPagination={false}
                showsButtons={true}
                prevButton={<PrevIcon width="35" height="35" fill="#000000" />}
                nextButton={<NextIcon width="35" height="35" fill="#000000" />}>
                {userInfo.testimonials.map((item, key) => (
                  <TextimonialItem key={key}>
                    <TestimonialHeader>
                      <TestimonialUserName>{item.name}</TestimonialUserName>
                      <Stars stars={item.rate} showNumber={false} />
                    </TestimonialHeader>
                    <TestimonialBody>{item.body}</TestimonialBody>
                  </TextimonialItem>
                ))}
              </Swiper>
            </TestimonialArea>
          )}
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#FFFFFF" />
      </BackButton>
    </Container>
  );
};
