import { createContext, useState } from 'react';
//모두 리액트 안의 것 자바 객체
const FavoritesContext = createContext({ //대문자 잊지 말것 
  favorites: [], //키
  totalFavorites: 0, //시작할땐 0개라서 0으로 지정. 여기까지만 하면 슬모 없음/ 변경할 방법 필요/ 
  //추가. 변경
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});
//리액트의 일반적인 컴포넌트 값을 받으려는 모든 컴포넌트에 context를 제공하는 역헐, 업데이트도 함
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
// 이름을 내보낸느 것
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  } //일케 하면 항상 최신 상태의 스냅샷을 받아올 수 잇음.

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    }); //meetup내장함수
  }
//헬퍼 함수, 항목을 보고 즐겨찾기된 항목인지 파악하는데 도움 주려고.
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
//favoritecontext 반환. 프로바이더 컴포넌트는 해당 컨테ㅡ트와 상호작용하는 모든 컴포넌트를 포함
  return ( //context덕에 래핑가능.
    <FavoritesContext.Provider value={context}>
      {props.children} /
    </FavoritesContext.Provider>
  );
}
//기본값으로 내보내는 것
export default FavoritesContext;
