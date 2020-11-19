import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {
  FlatList,
  Text,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import styles from './Style';
import {theme} from '../../theme/theme';
import RenderItem from './RenderItem';
import {GET_CHARACTERS} from '../../apollo/queries';

const HomeScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const {loading, error, data} = useQuery(GET_CHARACTERS, {
    variables: {search, page},
  });

  const [total, setTotal] = useState(data?.characters?.results);

  useEffect(() => {
    if (page === 1) {
      return setTotal(data?.characters?.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.characters, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
    setTotal([...total, ...data?.characters?.results]);
  };

  if (error) {
    return <Text>{error.message}</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Please search here"
        value={search}
      />
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.headerBackground} />
      ) : (
        <FlatList
          data={total}
          renderItem={(item) => (
            <RenderItem {...item} navigation={navigation} />
          )}
          keyExtractor={(item, i) => (item.id + i).toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
