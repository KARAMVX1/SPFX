import * as React from 'react';
import styles from './SampleExtenstion.module.scss';
import { ISampleExtenstionProps } from './ISampleExtenstionProps';

//import { escape } from '@microsoft/sp-lodash-subset';
import {SPComponentLoader} from '@microsoft/sp-loader';
//require ('jquery');
import 'jquery';
import 'datatables.net';
import 'jqueryTableBoot';
//require ('jqueryTableBoot');
//require ('jqueryButton');
require ('jqueryJSZip');
require ('jqueryPdf');
require ('jqueryFont');
//require ('jqueryHtml5');
//require ('JqueryCEvent');

export default class SampleExtenstion extends React.Component<ISampleExtenstionProps,  {}> {
  public render(): React.ReactElement<ISampleExtenstionProps> {
    const {
      //description,
      //isDarkTheme,
      //environmentMessage,
      hasTeamsContext,
      //userDisplayName
    } = this.props;
    SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css");
    SPComponentLoader.loadCss("https://cdn.datatables.net/1.11.5/css/dataTables.bootstrap4.min.css");
    SPComponentLoader.loadCss("https://cdn.datatables.net/buttons/2.2.2/css/buttons.dataTables.min.css");
    SPComponentLoader.loadCss("https://abbott.sharepoint.com/sites/GLB-BTS-WLASite/SiteAssets/css/wla-Newstyles.css");
  
    //adding the custom script
    const script =document.createElement("script");
    //script.src="https://www.cvent.com/g/mobile/javascript/calendar-widget-loader.js?version=469888.0111436111";
    script.src="https://abbott.sharepoint.com/sites/GLB-BTS-WLASite/SiteAssets/JS/calendar-widget-loader.js";
    script.async=true;
    document.head.appendChild(script);
  

    return (
      <section className={`${styles.sampleExtenstion} ${hasTeamsContext ? styles.teams : ''}`}>
         
    <div className="container p-0">
		<div className="row m-0">
			<div className="col-lg-12 mx-auto p-0">
				<div className="card rounded border-0">
					<div className="card-body p-0 bg-white rounded">
						<div className="eventTablecontainer">
							<div className="goToevent">
								<h2>Upcoming Events</h2>
							</div>
							<div className="text-align:center;">
							</div>
							<div className="goToEventBtn">
								<a href="https://web.cvent.com/p/1e5331ab-fd57-4d34-bc74-6218ec86bb26"
									className="btn btn-primary" role="button">Add An Event</a>
							</div>
							<div id='calendar-widget-container' data-widget-id='437a5854-b790-401d-aea9-711d0df5ec50'
								data-calendar-id='69263097-447c-4eec-9560-71f33beb2162' data-height='' data-width=''
								data-show-icons='true'>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
       
      </section>
    );
    
  }
}
