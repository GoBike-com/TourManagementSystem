var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import TabPanel from '../ExploreBar/TabPanel';
import { Grid, Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import classNames from "classnames";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import Tab from '@material-ui/core/Tab';
import { Autorenew } from '@material-ui/icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SignupModal from '../Modal/SignupModal';
import Recommendations from '../Recommendations/Recommendations.js';
import { Link, withRouter } from "react-router-dom";
import Header from "../../assets/components/Header/Header.js";
// import Button from "../../assets/components/CustomButtons/Button.js";
import HeaderLinks from "../../assets/components/Header/HeaderLinks.js";
import GridContainer from "../../assets/components/Grid/GridContainer.js";
import GridItem from "../../assets/components/Grid/GridItem.js";
import mylog from '../../assets/img/OurLogo.jpg';
import Parallax from "../../assets/components/Parallax/Parallax.js";
import img13 from '../../assets/img/image13.jpg';
import img14 from '../../assets/img/image14.jpg';

var LandingPage = function LandingPage(props) {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        modal = _React$useState2[0],
        setModal = _React$useState2[1];

    var websitename = "GoBike";

    var useStyles = makeStyles({
        mainContainer: {
            background: 'linear-gradient(315deg, #0cbaba 0%, #380036 74%)',
            height: 450,
            position: 'relative'
        },
        root: {
            height: 100,
            padding: '20px 260px 30px'
        },
        logo: {
            color: 'green',
            click: 'cursor'
        },
        websitename: {
            color: 'white',
            fontSize: '30px'
        },
        mainbody: {
            // height:500,
            position: 'relative'
        },
        btns: {
            marginLeft: '100px'
        },
        card: {
            maxWidth: 345,
            position: 'relative'
        },
        Recommendations: {
            height: 200,
            backgroundImage: 'url(../../assets/img/image13.jpg)'
        },
        left: {
            float: 'left'
        },
        right: {
            float: 'right'
        }
    });

    var classes = useStyles();

    var rest = _objectWithoutProperties(props, []);

    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: classes.mainContainer },
            React.createElement(CssBaseline, null),
            React.createElement(
                Grid,
                { container: true },
                React.createElement(Grid, { item: true, xs: 12, sm: 2 }),
                React.createElement(
                    Grid,
                    { item: true, xs: 12, sm: 8 },
                    '`   ',
                    React.createElement(
                        Grid,
                        { container: true, direction: 'row' },
                        React.createElement(
                            Grid,
                            { item: true, direction: 'row', xs: 12, sm: 6 },
                            React.createElement(
                                'span',
                                { className: classes.websitename },
                                websitename
                            ),
                            React.createElement(
                                'span',
                                null,
                                React.createElement(DirectionsBikeIcon, { className: classes.logo })
                            )
                        ),
                        React.createElement(
                            Grid,
                            { item: true, direction: 'row', xs: 12, sm: 6 },
                            React.createElement(SignupModal, null)
                        )
                    )
                ),
                React.createElement(Grid, { item: true, direction: 'row', xs: 12, sm: 2 })
            ),
            React.createElement(
                Grid,
                { container: true, direction: 'row', className: classes.mainbody },
                React.createElement(Grid, { item: true, direction: 'row', xs: 12, sm: 2 }),
                React.createElement(
                    Grid,
                    { item: true, direction: 'row', xs: 12, sm: 8 },
                    '`   ',
                    React.createElement(
                        Grid,
                        { container: true, direction: 'row' },
                        React.createElement(TabPanel, null)
                    )
                ),
                React.createElement(Grid, { item: true, direction: 'row', xs: 12, sm: 2 })
            )
        ),
        React.createElement(
            Grid,
            { container: true, className: classNames(classes.Recommendations, classes.mainRaised), spacing: 3 },
            React.createElement(
                Grid,
                { item: true, xs: 12, sm: 12 },
                React.createElement(
                    'h4',
                    { style: { fontWeight: '30px', fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '' } },
                    'Our star recommendations for your next trip'
                ),
                React.createElement(Recommendations, null)
            ),
            React.createElement(
                Grid,
                { item: true, xs: 12, sm: 12 },
                React.createElement(
                    'h4',
                    { style: { fontWeight: '30px', fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                    'Why GoBike ?'
                ),
                React.createElement(
                    'p',
                    { style: { fontWeight: '20px', fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', wordWrap: 'break-word', margin: '60px', padding: '50px', backgroundColor: 'indigo', color: 'white' } },
                    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
                    React.createElement('img', { style: { height: '300px' }, src: img13 })
                )
            ),
            React.createElement(
                Grid,
                { item: true, xs: 12, sm: 12 },
                React.createElement(
                    'h4',
                    { style: { fontWeight: '30px', fontSize: '30px', justifyContent: 'center', alignItems: 'center', marginLeft: '600px' } },
                    'Booking Tour with Go Bike ?'
                ),
                React.createElement(
                    'div',
                    { style: { margin: '60px' } },
                    React.createElement(
                        'p',
                        {
                            style: { fontWeight: '20px', fontSize: '15px', justifyContent: 'right', float: 'left', wordWrap: 'break-word', marginTop: '10px', padding: '30px', backgroundColor: '#BFD1FD' } },
                        React.createElement('img', { style: { height: '300px', float: 'left', margin: '5px', marginBlock: 'white', border: '12px solid white' }, src: img14 }),
                        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                    )
                )
            )
        )
    );
};

export default LandingPage;

var domContainer = document.querySelector('#index_container');
ReactDOM.render(React.createElement(LandingPage, null), domContainer);