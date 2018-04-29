import React from 'react';

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={c('App')}>
  <div className={c('App__wrapper')}>
    <header className={c('App__header')}>
      <div className={c('App__header--content')}></div>
    </header>

    <section className={c('App__row--intro')}>
      <h1 className={c('App__greeting')}>Hey Backpackers,</h1>
      <p className={c('App__para--intro')}>This is the first of our monthly updates on what is new in Backpack.
      It’s early days so please let us know how we can make this better.</p>
    </section>

    <section className={c('App__row')}>
      <h2 className={c('App__sub-header')}>New components</h2>
      <p className={c('App__para')}>We’re hard at work to ensure you have the componets and configurations
      you need. You can see what we’re working on below.</p>

      <table className={c('App__table')}>
      <thead>
        <tr>
          <th>Component</th>
          <th>Platform</th>
          <th>Sketch</th>
          <th>Code</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Section list</td>
          <td>iOS / Android</td>
          <td>Yes</td>
          <td>In progress</td>
        </tr>
        <tr>
          <td>Flat list</td>
          <td>iOS / Android</td>
          <td>Coming soon</td>
          <td>In progress</td>
        </tr>
        <tr>
          <td>Navigation bar</td>
          <td>Web</td>
          <td>In progress</td>
          <td>In progress</td>
        </tr>
        <tr>
          <td>Navigation Stack</td>
          <td>Web</td>
          <td>N/A</td>
          <td>In progress</td>
        </tr>
        <tr>
          <td>Section List</td>
          <td>Web</td>
          <td>In progress</td>
          <td>Coming soon</td>
        </tr>
        <tr>
          <td>Panelst</td>
          <td>iOS / Android</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Alerts</td>
          <td>iOS / Android</td>
          <td>In progress</td>
          <td>Coming soon</td>
        </tr>
        <tr>
          <td>Image</td>
          <td>iOS/Android</td>
          <td>Yes</td>
          <td>Coming soon</td>
        </tr>
        <tr>
          <td>Carousel</td>
          <td>iOS/Android</td>
          <td>Yes</td>
          <td>Coming soon</td>
        </tr>
        <tr>
          <td>Breadcrumb</td>
          <td>Web</td>
          <td>Yes</td>
          <td>Coming soon</td>
        </tr>
        <tr>
          <td>Progress bar</td>
          <td>iOS/Android</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Select</td>
          <td>iOS/Android</td>
          <td>Yes</td>
          <td>Coming soon</td>
        </tr>
        <tr>
          <td>Picker</td>
          <td>iOS/Android</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        </tbody>
      </table>
    </section>

    <section className={c('App__row')}>
      <h2 className={c('App__sub-header')}>We're here to help</h2>
      <p className={c('App__para')}>Don’t see what you need in Backpack? Or are you having difficulties
      getting something to work? We’re always here for advice, pairing or
      contributions.</p>
      <p className={c('App__para')}>Please reach out using the following channels:</p>
      <ol className={c('App__list')}>
      <li className={c('App__list-item')}><a href="https://skyscanner.slack.com/messages/C0JHPDSSU/details/" target="_blank" title="Ping the Backpack Slack channel"><img src="http://jamesferguson.co.uk/bpk-newsletter/logo-slack.png" width="102" height="30"/></a></li>
      <li className={c('App__list-item')}><a href="https://gojira.skyscanner.net/secure/RapidBoard.jspa?rapidView=2430" target="_blank" title="Raise a JIRA ticket"><img src="http://jamesferguson.co.uk/bpk-newsletter/logo-jira.png" width="102" height="30"/></a></li>
      <li className={c('App__list-item')}><a href="https://github.com/Skyscanner/backpack/issues" target="_blank" title="Raise an Issue on GitHub"><img src="http://jamesferguson.co.uk/bpk-newsletter/logo-github.png" width="102" height="30"/></a></li>
      </ol>
    </section>

    <section className={c('App__row')}>
      <h2 className={c('App__sub-header')}>Highlights this month</h2>
      <ol className={c('App__list--highlights')}>
      <li>Please welcome Tiago Engel who joined the squad as an Engineer all the
      way from sunny Brazil.
  </li>
      <li>Read <a href="https://www.digitalartsonline.co.uk/features/interactive-design/how-skyscanner-built-design-system-that-makes-designers-developers-lives-easier/" target="_blank">James’ interview</a> with Digital Arts Magazine about design systems
      at Skyscanner.</li>
      <li>Backpack have paired up with Identity &amp; Profile and Direct Booking
      to create componenets to enhance our mobile web experience. </li>
      <li>The new Backpack docs site is almost complete - we're just polishing
      the last few pieces. Watch this space.</li>
      </ol>
    </section>

    <section className={c('App__row')}>
      <span><a href="http://backpack.github.io" target="_blank">backpack.github.io</a></span>
    </section>
  </div>
  </div>
);

export default App;
