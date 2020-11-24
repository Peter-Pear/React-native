import React, {useState, useEffect} from 'react';
import {RefreshControl, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/back.svg';

import Api from '../../Api';

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  SearchArea,
  SearchInput,
  LoadingIcon,
  ListArea,
  NoResults,
  BackButton,
} from './styles';

import BarberItem from '../../components/BarberItem';

import SearchIcon from '../../assets/search.svg';

export default () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getBarbers = async () => {
    setLoading(true);
    setList([]);

    let res = await Api.getAllBarbers();

    if (res.error == '') {
      setList(res.data);
    } else {
      alert('Erro: ' + res.error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getBarbers();
  }, []);

  useEffect(() => {
    if (searchText == '') {
      getBarbers();
    } else {
      const filteredList = list.filter((listItem) =>
        listItem.name.toLowerCase().includes(searchText.toLocaleLowerCase()),
      );
      console.log(filteredList);
      setList(filteredList);
    }
  }, [searchText]);

  const onRefresh = () => {
    setRefreshing(false);
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <SearchArea>
          <BackButton onPress={handleBackButton}>
            <BackIcon width="44" height="44" fill="#FFFFFF" />
          </BackButton>
          <SearchInput
            placeholder="Digite o nome de um barbeiro"
            placeholderTextColor="#FFFFFF"
            value={searchText}
            onChangeText={(searchText) => setSearchText(searchText)}
          />

          <SearchButton>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </SearchArea>

        {loading && <LoadingIcon size="large" color="#FFFFFF" />}

        {list.length <= 0 ? (
          <NoResults>Não foram encontrados resultados</NoResults>
        ) : (
          <ListArea>
            {list.map((item, k) => (
              <BarberItem key={k} data={item} />
            ))}
          </ListArea>
        )}
      </Scroller>
    </Container>
  );
};
