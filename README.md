# 원티드 프리온보딩 3주차 과제

- 해당 repository는 원티드 프리온보딩 프론트엔트 인턴쉽 12차 3주차 과제을 다뤘습니다.
- `<a href="https://clinicaltrialskorea.com/">`해당 링크 `</a>`의 검색 영역을 클론하였으며 국내 임상시험 검색할때 추천 검색어를 보여주는 프로젝트입니다.
- 팀원들과 상의해 각 기능의 Best Practice를 도출하고 합친 결과물입니다.

## 팀 구성원 및 역할

- 원티드 프리온보딩 프론트엔트 인턴쉽 12차 4팀입니다.

|                                      **강병헌**                                       |                                      **김누리**                                       |                                      **김신혁**                                       |                                       **박윤철**                                       |                                    **우혜리 (팀장)**                                    |                                       **이은학**                                       |
| :-----------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| `<img width="180" alt="" src="https://avatars.githubusercontent.com/u/33623123?v=4">` | `<img width="180" alt="" src="https://avatars.githubusercontent.com/u/19181088?v=4">` | `<img width="180" alt="" src="https://avatars.githubusercontent.com/u/73675549?v=4">` | `<img width="180" alt="" src="https://avatars.githubusercontent.com/u/22779951?v=4" >` | `<img width="180" alt="" src="https://avatars.githubusercontent.com/u/107099724?v=4" >` | `<img width="180" alt="" src="https://avatars.githubusercontent.com/u/52943412?v=4" >` |
|                       [llbllhllk](https://github.com/llbllhllk)                       |                        [nuri1042](https://github.com/nuri1042)                        |                        [devshinn](https://github.com/devshinn)                        |                    [mrsimplelife](https://github.com/mrsimplelife)                     |                        [hyeri-woo](https://github.com/hyeri-woo)                        |                        [dmsgkr02](https://github.com/dmsgkr02)                         |
|               최근 검색어, 아웃포커스/추천검색어 선택시 SearchList 닫기               |                                    로컬 캐싱 구현                                     |                           Context API 설정, API 호출줄이기                            |                                        API 설정                                        |                               초기 설정, 검색어 추천 기능                               |                                     키보드 접근성                                      |

## 배포 링크

`<a href="https://pre-onboarding-12th-3-4.vercel.app/">`임상시험 검색 프로젝트 배포 링크 `</a>`

## 프로젝트 실행 방법

1. 프로젝트 클론

```
git clone https://github.com/pre-onboarding-12th-4/pre-onboarding-12th-3-4.git
```

2. 해당 폴더로 이동

```
cd pre-onboarding-12th-3-4
```

3. 프로젝트 패키지 설치

```
npm install
```

4. json-server 실행

```
npm run server
```

5. 프로젝트 실행

```
npm start
```

## 기술 및 개발 환경

### 사용 라이브러리

- 언어: TypeScript
- 스타일 관리: styled-components, react-icons
- 라우팅 관련 라이브버리: react-router-dom
- HTTP Client: axios
- 협업 설정 도구: eslint, prettier, husky, lint-staged
- 데이터 API 관련: json-server

```js
  "dependencies": {
    "axios": "^1.2.2",
    "react-router-dom": "^6.15.0",
    "styled-components": "^6.0.7",
    "typescript": "^4.9.5",
  },
  "devDependencies": {
    "eslint": "^8.48.0",
    "eslint-config-prettier": "^9.0.0",
    "husky": "^8.0.3",
    "lint-staged": "^14.0.1",
    "prettier": "^3.0.3",
    "react-icons": "^4.10.1"
  },
```

### Commit Message 컨벤션

| 태그 이름        | 설명                                                                      |
| ---------------- | ------------------------------------------------------------------------- |
| Initial          | 시스템 초기 설정                                                          |
| Feat             | 새로운 기능을 추가할 경우                                                 |
| Fix              | 버그를 고친 경우                                                          |
| Design           | CSS 등 사용자 UI 디자인 변경                                              |
| Style            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                     |
| Refactor         | 프로덕션 코드 리팩토링                                                    |
| Comment          | 필요한 주석 추가 및 변경                                                  |
| Docs             | 문서를 수정한 경우                                                        |
| Chore            | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) |
| Rename           | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                        |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                                        |
| Merge            | 파일 또는 브랜치 병합할 경우                                              |
| Dir              | 폴더 및 문서 구조 변경할 경우                                             |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                                    |

### Eslint 설정

```js
{
  "extends": ["react-app", "eslint:recommended", "prettier"],
  "rules": {
    "no-var": "error", // var 금지
    "no-multiple-empty-lines": "error", // 여러 줄 공백 금지
    "no-console": ["warn", { "allow": ["warn", "error", "info"] }], // console.log() 금지
    "eqeqeq": "error", // 일치 연산자 사용 필수
    "dot-notation": "error", // 가능하다면 dot notation 사용

    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off"
  }
}
```

### Prettier 설정

```js
{
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": true,
  "singleQuote": true,
  "proseWrap": "preserve",
  "semi": true,
  "printWidth": 120,
  "endOfLine": "lf",
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "arrowParens": "always"
}
```

## 폴더 구조

```
📦 src
├── 📂 api
│   ├── 📄 http.ts
│   └── 📄 search.ts
├── 📂 components
│   ├── 📂 common
│   │    └── 📄 Header.tsx
│   ├── 📂 search
│   │    ├── 📄 RecentSearchItem.tsx
│   │    ├── 📄 RecentSearchList.tsx
│   │    ├── 📄 Search.tsx
│   │    ├── 📄 SearchForm.tsx
│   │    ├── 📄 SearchItem.tsx
│   │    └── 📄 SearchList.tsx
├── 📂 context
│   ├── 📄 SearchContext.ts
│   └── 📄 SearchProvider.tsx
├── 📂 hooks
│   │    ├── 📄 useClickOutside.ts
│   │    └── 📄 useDebounce.ts
├── 📂 storage
│   │    ├── 📄 cacheStorage.ts
│   │    └── 📄 localStorage.ts
├── 📂 lib
│   └── 📄 utils.ts
├── 📂 pages
│   ├── 📄 Home.tsx
│   └── 📄 NotFound.tsx
├── 📂 route
│   ├── 📄 Router.tsx
├── 📂 styles
│   └── 📄 GlobalStyle.tsx
└── 📂 types
    └── 📄 index.tsx

```

## 기능 상세

현재 README에는 동료학습을 통해 도출된 각 Assignment의 Best Practice을 포함되어 있습니다. 더 자세한 내용은 해당 `<a href='https://lean-mahogany-686.notion.site/3-26232367afae4c01a9e421fac3a0bba5'>`노션 링크 `</a>`에서 확인하실 수 있습니다.

### Assignment 1: 검색어 추천 기능

> - 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
>   - 검색어가 없을 시 “검색어 없음” 표출

#### api 호출

- axios class를 사용해 generic하게 정의
- 해당 class의 매개변수로 storage를 받아 api 호출을 할때 해당 storage에 저장
- ✅ 이유: 재사용을 할 수 있게 하고 api 호출과 동시에 원하는 storage에 저장할 수 있게 만들기 위함

### API 호출 횟수 줄이기

> 추천 검색어에서 api 호출을 줄일 수 있는 방법은 여러가지가 있습니다.

1. 캐싱 (Caching)
2. 요청 중복 제거
3. 요청 병합 (Request Batching)
4. 클라이언트 측 검색 (Client-Side Search)
5. 서버 사이드 검색 (Server-Side Search)
6. 미리 가져오기 (Prefetching)
7. 델타 업데이트 (Delta Updates)
8. 웹 소켓 (WebSocket) 또는 실시간 기술 활용
9. debouncing

- 현재 적용된 로직은 단모음, 단자음, 공백을 구분하여 api 호출을 줄였습니다 + 캐싱.

단어 별로 요청을 할수도 있지만 그러면 검색어를 추천해주는 의미가 없다고 생각했습니다.

예를 들어 '대한 민국' 검색 할 경우 naver 나 google은 다른 로직들이 있겠지만 네트워크상

`ㄷ대ㅎ하한' 'ㅁ미민ㄱ구국` 이렇게 12번의 요청을 하고있었습니다.

현재 프로젝트에서는 가장 단순하게 '단모음/단자음/공백' 경우에는 api(cache 포)호출을 하지않아(ㄷㅎ" "ㅁㄱ) 7번의 호출을 하고 있습니다.

#### 검색어 정보 관리

- Context API로 searchText와 추천 검색어 리스트 저장
- ✅ 이유: searchText와 추천 검색어가 많은 컴포넌트에 걸쳐 사용되므로 전역에서 관리할 수 있어야 함

#### 화면에 뿌리기

- Context API를 통해 SearchList에서 추천 검색어 리스트를 저장하고 map으로 순회하며 SearchItem을 뿌리기

#### 최근 검색어

- localStroage class를 사용해 save, get하도록 정의
- 해당 class의 매개변수로 keyword와 searchText를 받아 localStorage에 저장
- ✅ 이유: 재사용 가능성을 높이기 위함

### Assignment 2: 로컬 캐싱 구현

> - API 호출별로 로컬 캐싱 구현
>   - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
>   - 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술
>   - expire time을 구현할 경우 가산점 (extra)

- cacheStorage로 저장
- ✅ 이유: 디스크 전체 용량의 60%까지 저장 가능한 cacheStorage를 이용
- api 호출 전 get메서드를 통해 검색어에 해당하는 캐시가 있는지 확인
- 캐시가 존재하면 해당 캐시를 리턴하고, 없으면 api 호출 후에 set메서드를 통해 캐시에 저장

#### expire time 구현

- 캐시의 header에 FETCH_DATE를 저장
- 이후 해당 캐시에 접근 시 `현재시간-FETCH_DATE > EXPIRE_TIME` 로 비교해 해당 캐시가 만료됐는지 여부를 판단, 만료되었으면 삭제

### Assignment 3: API 호출 횟수 줄이기

> - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
>   - README에 전략에 대한 설명 기술
>   - API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

- 한글의 경우 단모음 단자음이 아닐때 검색되게 구현
- 모든 언어 통틀어 setTimeout delay 시간을 짧게 설정해 useDebounce 훅에서 처리
- ✅ 이유: 임상시험의 경우 단모음 단자음이 포함되는 검색어가 없기에 한글의 경우는 단모음 단자음이 아닐때만 호출하는 것이 효율적임
- ✅ 이유: 영어나 다른 언어의 경우 단모음 단자음 처리가 애매하기 때문에 debounce 처리 (대신 delay 시간을 짧게 설정하여 검색어가 금방 나오도록 설정)

### Assignment 4: 키보드 접근성

> - 키보드만으로 추천 검색어들로 이동 가능하도록 구현
>   - 사용법 README에 기술

#### 추천 검색어 리스트에서의 이동

- input에서 화살표 아래키 눌렀을 시 추천 검색어 첫번째로 포커스
- input에서 화살표 위키를 눌렀을 시 추천 검색어 마지막으로 포커스
- 추천 검색어 리스트 안에서 계속 순회
- 추천 검색어에서 엔터키 눌렀을시 (submit)
  - 포거스 아이템 결과가 최근 검색 결과에 포함
- ✅ 이유: input에서의 화살표 이동하면 사용자 입장에서 편함
