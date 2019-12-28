import {StyleSheet} from 'react-native'

export const Colors = {
    dark: 'black',  //적용 가능한 테마 값 
    light: 'white'
};

const baseContainerStyles = {
    flex: 1,    //버튼의 컨테이너를 전체 화면으로 확장
    justifyContent: 'center',   //상하 중앙
    alignItems: 'center'    //좌우 중앙
}

const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150
}

const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.dark
    }
});

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    }
});

//버튼을 누를때마다 호출되어 theme 기준으로 스타일 리턴
export default function getStyleSheet(useDarkTheme){    
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}