import { AppBar, Button, Icon, IconButton, Toolbar, Typography } from '@material-ui/core';
import Search from '@material-ui/icons/Search'

export default () => {
    return (
        <>
            <AppBar position="sticky" style={{ backgroundColor: 'transparent' }}>
                <Toolbar variant="dense">
                    <IconButton edge="start">
                        <Icon>
                            <img
                                width={25}
                                height={25}
                                src="https://cdn.discordapp.com/icons/819111371521785857/b79eabae71c92a5840a7d4901cf35f98.webp" />
                        </Icon>
                    </IconButton>
                    <Typography style={{ color: 'black' }} variant="h6">
                        <a>Vietnam Community League</a>
                    </Typography>
                    <span style={{ flexGrow: 1 }} />
                    <a><Button>Home</Button></a>
                    <a><Button>Rules & Info</Button></a>
                    <a><Button>Players</Button></a>
                    <a><Button>Schedule</Button></a>
                    <a><Button>Mappools</Button></a>
                    <IconButton>
                        <Search />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}