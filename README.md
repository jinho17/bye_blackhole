# ft_transcendence

# 빌드  
    
    docker-compose up --build  
    
    
# 실행화면  
* 2-factor authentication

    <img src="https://user-images.githubusercontent.com/50227394/129212694-b51fa6f6-e1a4-4b4c-bdeb-3e5aebb816a2.png" width="43%" height="43%">
    
* admin page
    
    <img src="https://user-images.githubusercontent.com/50227394/129210821-d197b0a3-968a-47bb-8df5-fe89cf2368d2.png" width="40%" height="40%">  

* game/chat start

    <img src="https://user-images.githubusercontent.com/50227394/129210829-72c41290-118a-4a1a-8ab8-00c5621bf42a.png" width="50%" height="50%"><img src="https://user-images.githubusercontent.com/50227394/129210843-4a826526-a152-4fb3-a23a-92640296a0f4.png" width="50%" height="50%">

* lobby

    <img src="https://user-images.githubusercontent.com/50227394/129214493-7ca139d3-3052-4a60-ba7a-73b1a023e01d.png" width="80%" height="80%">

* user info

    <img src="https://user-images.githubusercontent.com/50227394/129214771-cb501a0b-1f04-47be-8127-731b1bc54936.png" width="80%" height="80%">

* game

    <img src="https://user-images.githubusercontent.com/50227394/129215095-615ba3e6-ba06-477c-862b-220c6ee87685.png" width="80%" height="80%">

* chat

    <img src="https://user-images.githubusercontent.com/50227394/129215312-7100f3bc-21b9-4c3d-a261-58ca589639f1.png" width="80%" height="80%">
    <img src="https://user-images.githubusercontent.com/50227394/129215352-bac6e1c8-7830-4365-a94e-40818b4f7d81.png" width="80%" height="80%">
    <img src="https://user-images.githubusercontent.com/50227394/129215522-2b391a63-add9-4e9e-9156-a854023c7c9b.png" width="80%" height="80%">


---------------------------------------------------------------------

# 과제해석
## Mandatory part

**I.1 Overview**

In this subject, you will need to build a website for the mighty pong contest.Your website will help users play pong against each other.There will be an admin view, chat with moderators, real-time multiplayer online games.You will need to follow those rules:

→ 관리자 화면, 사회자(?)와의 채팅, 실시간 멀티플레이어 온라인 게임

- you must use the last stable version of every framework or library.

    → 모든 프레임워크와 라이브러리의 마지막 안정화된 버전

- Your website backend should be written in NestJS.

    → 백엔드는 **NestJS**

- You must use a PostgreSQL database and no other databases.

    → 데이터베이스는 **PostgreSQL**

- The front end must be written with any typescript framework.

    → 프론트엔드는 **typescript** 프레임워크 아무거나

- Your website should be a single page app, but the user should be able to use the back button on the browser https://en.wikipedia.org/wiki/Singlepage_application

    → **싱글 페이지**이어야함, 그러나 사용자는 브라우저에서 **뒤로가기 버튼** 사용할수 있어야함

- Your website must be usable on the latest version to date on Google Chrome, Firefox, Safari.

    → 크롬, 파이어폭스, 사파리 최신 버전에서 돌아가야함

- There must be no unhandled errors or warnings when browsing through the website.

    → 웹사이트를 통해 브라우징 할 떄 다루어지지않은 에러 혹은 워닝은 없어야됨

- You can use any library.

    → 라이브러리 아무거나 써도됨

- Everything should run with a single call to `**docker-compose up –build**`

    → 모든것은 `docker-compose up -build` 한 번 요청으로 작동되어야만함

You should read the difference between a library and a framework

→ 당신은 **라이브러리**와 **프레임워크의** **차이를** 이해하여야함

You should look at route and router

→ **route** 와 **router**를 살펴보아야함

**I.2 Security concerns**

Because you are creating a fully working website, there are a few security concerns that you will have to tackle

너가 fully working website(프론트+백+DB 말하는듯) 을 만들기 때문에, 너가 거쳐야 할 몇가지 보안 염려들이 있다.

- Any password stored in your database must be encrypted

    → 너의 데이터베이스의 저장된 모든 **비밀번호들은 암호화** 되어야함

- Your website must be protected against SQL injections

    →  **SQL 인잭션들에 대항**하여 보호되어야만함

- You must implement some kind of server-side validation for forms and any user input

    → 양식들과 모든 유저 입력에 대하여 **server-side validation**의 몇몇 종류를 이행하여야만 한다

**I.3 User Account**

- A user must log in using the OAuth system of 42 intranet

    → user는 42 인트라넷의 **OAuth** 시스템을 이용하여 로그인 하여야만 한다.

- A user must be able to choose a unique name that will be displayed on the website

    → user는 웹사이트에 displayed 될 유일한 이름을 고를 수 있어야 한다.

- A user has several victories and losses and other stats (ladder level, achievements etc...)

    → 유저는 복수의 승리와 패배 그리고 또 다른 스탯들을 가지고 있다(레더 레벨, 성취 등)

- A user must have an avatar generated or uploaded by the user

    → 유저는 유저에 의하여 생성된 혹은 업로드된 아바타가 있어야만 한다.

- A user must be able to activate a **2-factor authentication** (like google authenticator

    or an SMS etc...)

    → 유저는 2-요소의 인증을 활성화할 수 있어야만한다 (google 인증 혹은 SMS 등 같이)

- A user can add other users as friends, and see their current status (online, offline, in a game...)

    → 유저는 다른 유저들을 친구로서 추가할 수 있고, 그들의 현재 상태를 볼 수 있다 (온라인, 오프라인, 게임에서)

- Each user has a match history (including duel, ladder) that can be consulted by anyone logged-in

    → 각각의 유저들은 매치 히스토리를 가지고 있다 (듀얼, 레더 등) 이는 로그인한 모든이가 찾을 수 있다.  

**I.4 Chat**

- Users must be able to create channels public/private or protected by a password

    → 유저들은 채널들은 비밀번호에 의해 public/private 혹은 protected로 생성할 수 있어야한다. 

- Users must be able to send direct messages to other users

    → 유저들은 다른 유저들에게 DM을 보낼 수 있어야함

- Users must be able to block other user and therefore they will not see their messages anymore

    → 유저들은 다른 유저를 block할 수 있어야함 그리고 그러므로 그들른 그들의 메시지들을 더이상 보지 못할 것림 @

- A user that creates a new channel is automatically its owner until he leaves the channel

    → 새로운 채널은 만드는 유저는 그가 채널을 떠날때까지 자동적으로 이의 오너여야한다. 

    ◦ owner of a channel can add/change/remove a password to access the channel

    → 채널의 오너는 채널을 접근하기 위해 비밀번호를 생성/변경/제blo거할 수 있습니다.

    ◦ owner can select a user to be an administrator and is also an administrator of the channel

    → 오너는 유저를 관리자로 선택할 수 있고 또한 채널의 관리자이다.

    ∗ administrator can ban or mute users for a certain amount of time

    → 관리자는 특정한 양의 시간 동안 밴을 하거나 유저들을 무시할 수 있다

- Through the chat interface users must be able to see other players profiles

    → 채팅 인터페이스를 통하여 유저들은 다른 플레이어들의 프로필을 볼 수 있어야만 한다

- Through the chat interface users should be able to ask other players to do a Pong match

    → 채팅 인터페이스를 통하여 유저들은 Pong 매치를 요청할 수 있어야한다.

**I.5 Game**

The main purpose of this website is to play pong against other players and show everyone how good you are!

→ 이 웹사이트의 주요 목적은 다른 플레이어들에 대항하여 pong 게임을 플레이하는 것이고 당신이 얼마나 좋은지 보여주는 것입니다.

Therefore we should be able to play pong directly on the website and live against another player.

→ 그러므로 우리는 pong 게임을 웹 사이트 에서 직접 플레이할 수 있어야만 한다. 또 다른 플레이어에게 생방송으로 볼 수 있어야한다.

There must be a match-making system, user can join a game queue and are automatically matched with another player.

→ match-making 시스템이 있어야만 한다, 유저들은 게임 큐에 참여할 수 있고 또다른 플레이어 들과 자동적으로 매치된다. 

It can be on a canvas or it can be with 3d effects, it can be ugly but it must be a pong like the one from 1972.

→ 캔버스 위 일수 있고 3d 효과가 있을 수고, ugly할 수 도있다. 하지만 이는 1972년 퐁 게임과 같아야 한다.

You need to have some game customization options (power-ups, different maps etc) but the user must be able to play a default pong game without any added stuff.

→ 너는 몇몇 커스터마이즈 옵션을 가질 필요가 있다 (파워-업, 다른 맵들 등) 하지만 유저는 옵션없이 default 게임을 할 수 있어야한다.

The game must be responsive!Other users can watch the game live without interfering in it.

→ 게임은 즉각적으로 반응할 수 있어야만 한다! 다른 유저들은 이를 방해하지않고 라이브로 시청할 수 있어야한다.

Think about network issues, like disconnects or lag. The user experience should be the best possible.

→ **disconnects**와 **lag** 같은 네트워크 이슈들에 대해서 생각해보아라. 유저 경험이 우선이다.



-----------------------------------------------

# API

* login/out

42 인증 후 redirect 될 url

    get /2-factor-auth?intra_id={intra_id}


e-mail 2차 인증  

    post log/2-factor-auth
    body: {intra_id:string, auth_value:string}
    return: {id:string, auth_result:boolean}


logout

    patch log/out
    body: {intra_id:string}



* Lobby

로비 모든 채팅방 리스트

    get Lobby/chatList 
    response: ({title:string, num(채팅방인원):number, security:string}[])


로비 모든 게임 리스트

    get Lobby/gameList 
    response: ({p1:string, p2:string, speed:boolean, ladder:boolean}[])


로비 내가 참여한 채팅방 리스트

    get Lobby/myChatList?id={id} 
    response: ({{title:string, num:number}[])

로비 모든 유저 리스트-모든 유저 요청이라면 id 받을 수 없을 텐데? —> 친구인지알아야해서
    
    get Lobby/userList?id={id} 
    response: ({id:string, icon:string, state:string, isFriend:boolean}[])


채팅방 입장하기

    post Lobby/enter
    body ({title:string, id:nickname, password:string}) // 암호화된 비밀번호 argon2.hash 참조
    return type : 
     - 401 unauthorization: 비밀번호 필요
     - 403 forbiden: 차단된 멤버
     - 404 not found: 없는 방입니다.
     - 200 ok: 입장 성공.


myChat에서 채팅방 삭제하기

    delete Lobby?title={title}&id=id


채팅방 만들기
dm인 경우 title = 'DM_user1_user2'(ID오름차순 정렬), security:'private', pwd:'', owner_id:'user1'

    post Lobby/chatCreate
    body ({title:string, password:string, security:string, owner_id:string})


게임방만들기
    
    post Lobby/gameCreate
    body({id:string, speed:boolean, ladder:boolean})


* admin
유저 자신의 프로필 id, icon 생성

새로 생성

    post admin
    body: intra_id, icon, nickname


기존에 있던 유저 정보 수정

    patch admin
    body: intra_id, icon, nickname


* profile

유저의 프로필 보기

    get profile?myID={nickname}&otherID={nickname}  
    return ({history:{win:boolean, id:string}[], friend:boolean, block:boolean, win:number , lose:number, ladder:number} - 남의프로필보는경우 | {history:{win:boolean, id}[], win:number, lose:number, ladder:number} - 내프로필보는경우)


intra id로 내 nickname, icon받기

    get profile/my?intra_id={intra_id}
    return ({id: nickname, icon:string, state:string})

유저 상태 변경(online, offline, gaming..)

    patch profile/userState
    body: id:nickname, state:string


해당 id의 친구 요청(수락x,팔로잉o)

    put profile/friend  
    body: {myID, otherID, isFriend:boolean}


id에 대응하는 유저 블럭요청 

    put profile/block  
    body: {myID, otherID, isBlock:boolean}


내가 블럭한 모든 유저 리스트 가져오기
    
    get profile/allblock?myID={nickname}
    return {blocklist:string[]}


* chat

전체 채팅 로그 받기

    get chat/chatLog?title={title} 
    response: ({id, date, content, icon, sysMsg:boolean}[])


채팅 로그 저장(메세지 한개씩 저장)

    post chat/chatLog
    body: ({title, id, date, content, sysMsg:boolean})


채팅방 정보 받기

    get chat/info?title={title}
    response: {num, security, users:{id:nickname, permission, icon}[]}


비밀번호 변경(owner만 가능)
    
    post chat/setting
    body: {title:string, password:string}
    return ({success:boolean})


(owner)가 관리자 지정
    
    get chat/admin?title={title}&id={nickname} 
    return ({success:boolean})

(owner)가 관리자 삭제

    delete chat/admin?title={title}&id={nickname} 
    return ({success:boolean})


kick:시간x ban:3일 mute:3일(owner & administrator가 가능)

mute 인지 확인

    get chat/mute?title={title}&id={nickname} 
    return ({isMuted:boolean})


mute 걸기

    put chat/mute
    body ({title, id, isMuted:boolean})


ban

    get chat/ban?title={title}&id={nickname}
    return ({success:boolean})


unban
    
    get chat/unban?title={title}&id={nickname}
    return ({success:boolean})


ban list 받기

    get chat/banList?title={title}
    return ({id:string[]})


kick

    get chat/kick?title={title}&id={nickname}  
    return ({success:boolean})
    

* match-history

게임 전적 추가

    post match-history
    body: {p1_id: string, p2_id: string, winner : string, ladder:boolean}
    


-------------------------------------------------------
# DB 설계  

![스크린샷 2021-08-12 오후 9 35 52](https://user-images.githubusercontent.com/50227394/129202474-103e306a-f609-474a-8447-a57246aa74ba.png)

