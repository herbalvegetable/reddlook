import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import {
    Mail20Filled,
    CalendarLtr20Regular,
    People20Regular,
    Attach20Regular,
    AppFolder24Regular,
} from '@fluentui/react-icons';

import styles from './Sidebar.module.css';

const Sidebar = props => {

    const [sidebarActions, setSidebarActions] = useState([
        {
            title: 'Email',
            Icon: Mail20Filled,
            iconColor: '#0f6cbd',
        },
        {
            title: 'Calendar',
            Icon: CalendarLtr20Regular,
        },
        {
            title: 'People',
            Icon: People20Regular,
        },
        {
            title: 'Files',
            Icon: Attach20Regular,
        },
        {
            title: 'To Do',
            imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL1SURBVHgB7VVPaxNBFH8zidHWViNoUpHWePGcD6DQiBSqIlUEqxcdBEFE/AhZP4FfYUHEQlEqBf8cdAsF8daeRFCwR2+phPqn7b7xzezOZrLZZJOaXCQPktnd2Znfn/fmLcAw/ve47v18OL+y9W1+9Vc1aZ7BAOPau60qATiMA3CFlOHOwtmRR/Y7HAYUV9/Wq9KXjpQSJALQAOCjE3diIA5cfl2v8kg5AzXSQCNrcaLvDlxarlfBUo40YuiAvqef7URfHbjwsk45R4eRXK5Ua+WsSb0ao5qQWMkmbXTsplfOwO4cYNb9vlDZ6AZ85vkPyrnvhDuTUqbVcSYDNKRnigRK/T4SK8nYJksC5ww9Wpen2w1aVUkjcX6xRjlnTqCU8HhcdehEOOpnEsTizJjLOoCb6Eji3LNalfZ04vZGgIaENU9z4gWBq/UsBbwjiemnBA7SacmxccJSbU4C51wszQbgEYEU8EQSZ57UdMFx1qywyXIWpsPcZ0AsXzzk2puyiXmvJDO4lgLeRKI0W77FNXioKkYiAG4oV/MZQLF85Ygb3zBLZTndJbiK0uHTxTWJmMcweaqRIKjKZkFTwaDq1ZkHLlW5A2ZQvEoA1+t/5/iSBLYOXcT4qSKMTRXyqrmoxoIY4OnrpoYj9XM9z6R40wYcIKyB/G0vv39besS73O7Fg6UijJcmoGF747gp5cZ2XXgQXAND8f7GURc6hHZt061s/smxSjsnRk8WYXSqCKq9NhQrhbLhAhhHZHC9mw4eOWAiyYkDk0UYIQKcASQVXaITKMWqSAePHDARdyJH4LnJQkOxnW/biTD/qu4k+l2DtxCIk9h3ohABtCNhik2lB3xffBAFF3qIxM+xIeFv767bKm0S8Wf0Lz7e6Q1cRcfPcelxLc/4jkcpLkf5Nh3OrgE6aut3ewdPJWCTILAyTyBBHohP9/YG3hUBm0TcCYIXn+/vHbxrAkkkqMeLL/8I3hMBQwJgZy6b9Te+Pji+AsMYRh/iL5mvmIzqBzX8AAAAAElFTkSuQmCC',
        },
        {
            title: 'Go to Word',
            imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiM0MWE1ZWU7fS5jbHMtM3tmaWxsOiMyYjdjZDM7fS5jbHMtNHtmaWxsOiMxODVhYmQ7fS5jbHMtNXtmaWxsOiMxMDNmOTE7fS5jbHMtNntvcGFjaXR5OjAuNTt9LmNscy03e2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPldvcmRfMjR4PC90aXRsZT48ZyBpZD0iV29yZCI+PGcgaWQ9Il8yNCIgZGF0YS1uYW1lPSIyNCI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNCw3VjJhMSwxLDAsMCwwLTEtMUg3QTEsMSwwLDAsMCw2LDJWN2w5LDJaIi8+PHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9IjI0IDcgNiA3IDYgMTIgMTUuNSAxNCAyNCAxMiAyNCA3Ii8+PHBvbHlnb24gY2xhc3M9ImNscy00IiBwb2ludHM9IjI0IDEyIDYgMTIgNiAxNyAxNSAxOC41IDI0IDE3IDI0IDEyIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNNiwxN0gyNGEwLDAsMCwwLDEsMCwwdjVhMSwxLDAsMCwxLTEsMUg3YTEsMSwwLDAsMS0xLTFWMTdhMCwwLDAsMCwxLDAsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0xMy44Myw2SDZWMjBoNy42QTEuNSwxLjUsMCwwLDAsMTUsMTguNjVWNy4xN0ExLjE4LDEuMTgsMCwwLDAsMTMuODMsNloiLz48cmVjdCBpZD0iQmFja19QbGF0ZSIgZGF0YS1uYW1lPSJCYWNrIFBsYXRlIiBjbGFzcz0iY2xzLTQiIHk9IjUiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjEuMTciLz48cGF0aCBpZD0iTGV0dGVyIiBjbGFzcz0iY2xzLTciIGQ9Ik0xMC4xNiwxNkg4LjcyTDcsMTAuNDgsNS4yOCwxNkgzLjg0TDIuMjQsOEgzLjY4TDQuOCwxMy42LDYuNDgsOC4xNmgxLjJsMS42LDUuNDRMMTAuNCw4aDEuMzZaIi8+PC9nPjwvZz48L3N2Zz4=',
        },
        {
            title: 'Go to Excel',
            imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMWEzNjY7fS5jbHMtMntmaWxsOm5vbmU7fS5jbHMtM3tmaWxsOiMxMDdjNDE7fS5jbHMtNHtmaWxsOiMzM2M0ODE7fS5jbHMtNXtmaWxsOiMxODVjMzc7fS5jbHMtNntvcGFjaXR5OjAuNTt9LmNscy03e2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkV4Y2VsXzI0eDwvdGl0bGU+PGcgaWQ9IkV4Y2VsIj48ZyBpZD0iXzI0IiBkYXRhLW5hbWU9IjI0Ij48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNiwxSDdBMSwxLDAsMCwwLDYsMlY3bDEwLDUsNCwxLjVMMjQsMTJWN1oiLz48cmVjdCBjbGFzcz0iY2xzLTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPjxyZWN0IGNsYXNzPSJjbHMtMyIgeD0iNiIgeT0iNy4wMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjQuOTgiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yNCwyVjdIMTZWMWg3QTEsMSwwLDAsMSwyNCwyWiIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTE2LDEySDZWMjJhMSwxLDAsMCwwLDEsMUgyM2ExLDEsMCwwLDAsMS0xVjE3WiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTEzLjgzLDZINlYyMGg3LjZBMS41LDEuNSwwLDAsMCwxNSwxOC42NVY3LjE3QTEuMTgsMS4xOCwwLDAsMCwxMy44Myw2WiIvPjxyZWN0IGlkPSJCYWNrX1BsYXRlIiBkYXRhLW5hbWU9IkJhY2sgUGxhdGUiIGNsYXNzPSJjbHMtMyIgeT0iNSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iMS4xNyIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTMuNDMsMTYsNiwxMiwzLjY0LDhINS41NWwxLjMsMi41NWE0LjYzLDQuNjMsMCwwLDEsLjI0LjU0aDBhNS43Nyw1Ljc3LDAsMCwxLC4yNy0uNTZMOC43Niw4aDEuNzVMOC4wOCwxMmwyLjQ5LDRIOC43MWwtMS41LTIuOEEyLjE0LDIuMTQsMCwwLDEsNywxMi44M0g3YTEuNTQsMS41NCwwLDAsMS0uMTcuMzZMNS4zLDE2WiIvPjxyZWN0IGNsYXNzPSJjbHMtMyIgeD0iMTYiIHk9IjEyIiB3aWR0aD0iOCIgaGVpZ2h0PSI1Ii8+PC9nPjwvZz48L3N2Zz4=',
        },
        {
            title: 'Go to Powerpoint',
            imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNlZDZjNDc7fS5jbHMtM3tmaWxsOiNmZjhmNmI7fS5jbHMtNHtmaWxsOiNkMzUyMzA7fS5jbHMtNXtvcGFjaXR5OjAuNTt9LmNscy02e29wYWNpdHk6MC4xO30uY2xzLTd7ZmlsbDojYzQzZTFjO30uY2xzLTh7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+UG93ZXJwb2ludF8yNHg8L3RpdGxlPjxnIGlkPSJQb3dlcnBvaW50Ij48cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzLDFBMTEsMTEsMCwwLDAsMiwxMmwxNC44NCwzLjg0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTEzLDFBMTEsMTEsMCwwLDEsMjQsMTJMMTguNSwxNSwxMywxMloiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yLDEyYTExLDExLDAsMCwwLDIyLDBaIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNMTUsMTguNjVWNy4xN0ExLjE4LDEuMTgsMCwwLDAsMTMuODMsNkgzLjhBMTAuOTEsMTAuOTEsMCwwLDAsNS40OSwyMEgxMy42QTEuNSwxLjUsMCwwLDAsMTUsMTguNjVaIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNMTUsMTguNjVWNy4xN0ExLjE4LDEuMTgsMCwwLDAsMTMuODMsNkgzLjhBMTAuOTEsMTAuOTEsMCwwLDAsNS40OSwyMEgxMy42QTEuNSwxLjUsMCwwLDAsMTUsMTguNjVaIi8+PHJlY3QgaWQ9IkJhY2tfUGxhdGUiIGRhdGEtbmFtZT0iQmFjayBQbGF0ZSIgY2xhc3M9ImNscy03IiB5PSI1IiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHJ4PSIxLjE3Ii8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJNNy40LDhhMy4zMiwzLjMyLDAsMCwxLDIuMi42NCwyLjMyLDIuMzIsMCwwLDEsLjc2LDEuODZBMy40MiwzLjQyLDAsMCwxLDEwLDEyLjExYTIuNTQsMi41NCwwLDAsMS0xLjA3LDEsMy43LDMuNywwLDAsMS0xLjYxLjM0SDUuNzhWMTZINC4yMlY4Wk01Ljc4LDEySDcuMTJhMS43OCwxLjc4LDAsMCwwLDEuMTktLjM1LDEuNDYsMS40NiwwLDAsMCwuNC0xLjFjMC0uODgtLjUxLTEuMzItMS41NC0xLjMySDUuNzhaIi8+PC9nPjwvc3ZnPg==',
        },
        {
            title: 'Go to Yammer',
            imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyOGE4ZWE7fS5jbHMtMntmaWxsOiMwMDc4ZDQ7fS5jbHMtM3tmaWxsOiMwMzU4YTc7fS5jbHMtNHtvcGFjaXR5OjAuNTt9LmNscy01e2ZpbGw6I2ZmZjt9LmNscy02e2ZpbGw6bm9uZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPllhbW1lcl8yNHg8L3RpdGxlPjxnIGlkPSJZYW1tZXIiPjxnIGlkPSJfMjQiIGRhdGEtbmFtZT0iMjQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwLjQzLDEwLjJhNy4xMyw3LjEzLDAsMCwwLS4zMi0xQTcsNywwLDAsMCw4LjgsNy4xNmEuMjguMjgsMCwwLDEtLjA5LS4yMi4zMi4zMiwwLDAsMSwuMDktLjIyTDE1LjM0LjE5YS42My42MywwLDAsMSwuOTIsMCwxNy4yLDE3LjIsMCwwLDEsMy4yNiw1LDE5LjYxLDE5LjYxLDAsMCwxLC44MSwyLjM4bC00LDRaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjMuNDEsNy40OEEuNjMuNjMsMCwwLDAsMjIuNjMsN2wtMTIuMiwzLjE2QTYuODcsNi44NywwLDAsMSwxMC42NywxMmE2Ljc0LDYuNzQsMCwwLDEtLjI0LDEuOEwxNSwxNy4xOGw1LjMzLS44LDIuMjkuNmEuNjMuNjMsMCwwLDAsLjc5LS40NUExOS42MiwxOS42MiwwLDAsMCwyMy45NCwxMiwxOS40NywxOS40NywwLDAsMCwyMy40MSw3LjQ4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTEwLjQzLDEzLjhhNy4xMyw3LjEzLDAsMCwxLS4zMiwxQTYuOSw2LjksMCwwLDEsOC44LDE2Ljg0YS4yOS4yOSwwLDAsMC0uMDkuMjIuMzYuMzYsMCwwLDAsLjA5LjIzbDYuNTQsNi41MmEuNjQuNjQsMCwwLDAsLjkyLDAsMTcuMiwxNy4yLDAsMCwwLDMuMjYtNSwyMC4zNiwyMC4zNiwwLDAsMCwuODEtMi4zOVoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xNSwxOC42NVY3LjE3QTEuMTgsMS4xOCwwLDAsMCwxMy44Myw2SDkuNTJsLS43My43NCwwLC4wNmEuMzMuMzMsMCwwLDAsMCwuMzgsNy4yMiw3LjIyLDAsMCwxLDEuMzQsMi4wNyw4LjEsOC4xLDAsMCwxLC4zMS45NSw2Ljg3LDYuODcsMCwwLDEsMCwzLjYsNy4xMyw3LjEzLDAsMCwxLS4zMiwxQTYuOSw2LjksMCwwLDEsOC44LDE2Ljg0YS4yOS4yOSwwLDAsMC0uMDkuMjIuMzYuMzYsMCwwLDAsLjA5LjIzTDExLjUyLDIwSDEzLjZBMS41LDEuNSwwLDAsMCwxNSwxOC42NVoiLz48cmVjdCBpZD0iQmFja19QbGF0ZSIgZGF0YS1uYW1lPSJCYWNrIFBsYXRlIiBjbGFzcz0iY2xzLTIiIHk9IjUiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjEuMTciLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik02Ljg1LDExLjM2YTMuMTQsMy4xNCwwLDAsMSwuMTkuNTJoMGEyLjYzLDIuNjMsMCwwLDEsLjE5LS41MUw5LDhhLjc4Ljc4LDAsMCwxLC42OS0uNDFoMGEuNzkuNzksMCwwLDEsLjY4LDEuMTdMNy45NCwxMy4wNmEuNzQuNzQsMCwwLDAtLjExLjM5djIuMTZhLjc4Ljc4LDAsMCwxLS43OC43OEg2Ljg5YS43OC43OCwwLDAsMS0uNzgtLjc4VjEzLjQ3YS43NS43NSwwLDAsMC0uMS0uMzhMMy42LDguNzdhLjc4Ljc4LDAsMCwxLC42OC0xLjE2aC4xNkEuNzcuNzcsMCwwLDEsNS4xMyw4WiIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+PC9nPjwvZz48L3N2Zz4=',
        },
        {
            title: 'Bookings',
            imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDQ4LjI1IDIwNDguMjUiPgo8dGl0bGU+Qm9va2luZ3M8L3RpdGxlPgo8ZyBpZD0idW5pRURDNyI+PHBhdGggZD0iTTk2MCA3NjhxLTEzMyAwIC0yNDkuNSA1MHQtMjAzLjUgMTM3dC0xMzcgMjAzLjV0LTUwIDI0OS41djY0MGg2NDB2LTEyODB6TTEwODggMTQwOHExMzMgMCAyNDkuNSAtNTB0MjAzLjUgLTEzN3QxMzcgLTIwMy41dDUwIC0yNDkuNWgtNjQwdjY0MHpNMzIwIDY0MGgxNDA4cTAgLTEzMyAtNTAgLTI0OS41dC0xMzcgLTIwMy41dC0yMDMuNSAtMTM3dC0yNDkuNSAtNTBoLTc2OHY2NDB6IiBmaWxsPSIjMDBBOTlEIiB0cmFuc2Zvcm09InNjYWxlKDEsLTEpIHRyYW5zbGF0ZSgwLCAtMjA0OC4yNSkiIC8+PC9nPgo8L3N2Zz4=',
        },
        {
            title: 'Go to Onedrive for Business',
            imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMwMzY0Yjg7fS5jbHMtM3tmaWxsOiMwMDc4ZDQ7fS5jbHMtNHtmaWxsOiMxNDkwZGY7fS5jbHMtNXtmaWxsOiMyOGE4ZWE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5PbmVEcml2ZV8yNHg8L3RpdGxlPjxnIGlkPSJPbmVEcml2ZSI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNC41LDE1bDQuOTUtNC43NEE3LjUsNy41LDAsMCwwLDUuOTIsOEM2LDgsMTQuNSwxNSwxNC41LDE1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTkuMTUsOC44OWgwQTYsNiwwLDAsMCw2LDhINS45MmE2LDYsMCwwLDAtNC44NCw5LjQzTDguNSwxNi41bDUuNjktNC41OVoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xOS40NSwxMC4yNmgtLjMyYTQuODQsNC44NCwwLDAsMC0xLjk0LjRoMGwtMywxLjI2TDE3LjUsMTZsNS45MiwxLjQ0YTQuODgsNC44OCwwLDAsMC00LTcuMThaIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNMS4wOCwxNy40M0E2LDYsMCwwLDAsNiwyMEgxOS4xM2E0Ljg5LDQuODksMCwwLDAsNC4yOS0yLjU2bC05LjIzLTUuNTNaIi8+PC9nPjwvc3ZnPg==',
        },
        {
            title: 'More apps',
            Icon: AppFolder24Regular,
            bigger: true,
        },
    ]);

    return (
        <div className={styles.sidebar}>
            {
                sidebarActions.map((action, i) => {
                    const actionClassName = action.bigger ? styles.img_bigger : styles.img;

                    return <div 
                        key={i.toString()} 
                        className={styles.action}
                        title={action.title}>
                        {
                            action.Icon ?
                            
                            <action.Icon
                                primaryFill={action.iconColor || '#616161'}
                                className={actionClassName}/>

                            :

                            <Image 
                                src={action.imgSrc}
                                className={actionClassName}/>
                        }
                    </div>
                })
            }
        </div>
    )
}

export default Sidebar;