/*
    VideoSegments. Extension to Cut YouTube Videos. 
    Copyright (C) 2017-2018  Alex Lys

    This file is part of VideoSegments.

    VideoSegments is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    VideoSegments is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with VideoSegments. If not, see <https://www.gnu.org/licenses/>.
*/

'use strict';

// function to get settings 
function getSettings() 
{
    // default settings 
    let settings = {
        // segments configuration
        segments: {
            // expert mode 
            // content 
            c: 	{ skip: false, color: '#00c853', duration: 0.0, speed: 1.0 },
            // adcontent 
            ac: { skip: false, color: '#00897b', duration: 0.0, speed: 1.0 },
            // advertisement 
            a: 	{ skip: true,  color: '#e53935', duration: 0.0, speed: 5.0 },
            // intro 
            i: 	{ skip: true,  color: '#3949ab', duration: 0.0, speed: 5.0 },
            // credits 
            cr: { skip: true,  color: '#ffb300', duration: 0.0, speed: 5.0 },
            // cutscene 
            cs: { skip: true,  color: '#757575', duration: 0.0, speed: 2.0 },
            // offtop 
            o: 	{ skip: true,  color: '#8e24aa', duration: 0.0, speed: 3.0 },
            // interactive 
            ia: { skip: true,  color: '#00acc1', duration: 0.0, speed: 4.0 },
            // scam 
            s:	{ skip: true,  color: '#6d4c41', duration: 0.0, speed: 5.0 },
            
            // simplified mode 
            // play 
            pl: { skip: false, color: '#00c853', duration: 0.0, speed: 1.0 },
            // skip 
            sk:	{ skip: true,  color: '#757575', duration: 0.0, speed: 5.0 },
        },

        // global settings 
        autoPauseDuration: 2.0,
        showPageOnReject: true,
        popupDurationOnSend: 5.0,
        databasePriority: 'local',
        segmentationToolsOpacity: 60,
        segmentsBarLocation: 'separated',
        hidePlayingSegmentBars: false,
        minimized: false,

        // normal mode settings
        maximizePanelOnHover: false,
        segmentationToolsFullscreenOpacity: 50,
        showEditorInFullscreen: true,

        // expert mode settings 
        showSegmentationTools: true,
        hideOnSegmentedVideos: false,
        pinSegmentationTools: false,
        hideIcon: false,
        iconOpacity: 100,
        highlightIcon: true,

        // settings 
        mode: 'simplified', 
        lastTab: 'tab-settings',
        
        // filtration 
        filters: {
            apiKey: '',
            
            channelBased: {
                enabled: false,
            },
            
            silence: {
                enabled: false,
                threshold: 0,
                duration: 2.0,
            },
        },
        
        // tutorial
        tutorial: 0,

        // editor settings 
        editor: {
            posX: 200,
            posY: 200,
            fullscreenPosX: 200,
            fullscreenPosY: 200,
        },
        
        // backward compatibility
        lastUpdateId: 0,

        // developer
        debug: true,

        // obsolete vars 
        // simplified
        // lastVersionChanges
    };

    // make function async 
    return new Promise(resolve => {
        // request settings 
        browser.storage.local.get({settings}, (result) => {
            // backward compatibility 
            settings = Object.assign({}, settings, result.settings);
            // return promise 
            resolve(settings);
        });
    });
}

function saveSettings()
{
    browser.storage.local.set({ settings: settings });
}