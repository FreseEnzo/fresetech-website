import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'DIY Electric Skateboard',
    Svg: require('@site/static/img/skate.svg').default,
    description: (
      <>
        Developed an electric skateboard powered by a BLDC motor, leveraging STM32 microcontrollers for real-time control. Designed a custom control algorithm for efficient motor operation.
      </>
    ),
    tags: ['C', '3D', 'STM32', 'BLDC', 'Control'],
    docsLink: '/docs/projects/electric-skateboard',
  },
  {
    title: 'Multi Power Station',
    Svg: require('@site/static/img/buck.svg').default,
    description: (
      <>
        Created a modular buck-boost converter that provides flexible voltage regulation. Designed custom PCBs and 3D-printed enclosures to enable a compact, user-friendly product.
      </>
    ),
    tags: ['3D', 'PCB', 'C', 'Power Electronics'],
    docsLink: '/docs/projects/power-station',
  },
  {
    title: 'Portable Soldering Station',
    Svg: require('@site/static/img/soldering.svg').default,
    description: (
      <>
        Developed a compact and portable soldering iron station with precise temperature control. Powered by a lithium battery, it features quick heat-up times and reliable operation, making it ideal for on-the-go electronics work.
      </>
    ),
    tags: ['PCB', 'ESP32', '3D', 'C'],
    docsLink: '/docs/projects/soldering-station',
  },
  {
    title: 'Educational Board with STM NUCLEO H723ZG',
    Svg: require('@site/static/img/board.svg').default,
    description: (
      <>
        Developed an educational hardware platform based on the STM NUCLEO H723ZG, aimed at introducing users to embedded systems. It supports various sensors and actuators for a hands-on learning experience.
      </>
    ),
    tags: ['PCB', 'STM32', 'Zephyr'],
    docsLink: '/docs/projects/soldering-station',
  },
  {
    title: 'OpenEmbedded Contribution',
    Svg: require('@site/static/img/oe.svg').default,
    description: (
      <>
        Developed a Yocto meta-layer which simplifies the deployment and management of ChirpStack components.
      </>
    ),
    tags: ['Linux', 'Yocto', 'Chirpstack'],
    docsLink: '/docs/projects/oe-contribution',
  },
  /*{
    title: 'Jammer using ESP32 and White Noise',
    Svg: require('@site/static/img/jammer.svg').default,
    description: (
      <>
        Designed a jammer device using the ESP32 platform to generate white noise and disrupt specific communication frequencies. This project explores wireless communication interference and mitigation techniques.
      </>
    ),
    tags: ['ESP32', 'Probabilistic Models', '3D'],
    docsLink: '/docs/powered-by-react',
  },
  {
    title: 'Mini Hydroponic System with IoT',
    Svg: require('@site/static/img/hydroponic.svg').default,
    description: (
      <>
        Built a mini hydroponic system with IoT capabilities, enabling remote monitoring and control of water and nutrient levels. Integrated sensors and IoT protocols to automate plant care efficiently.
      </>
    ),
    tags: ['IoT', 'PCB', 'Sensors', 'C', '3D'],
    docsLink: '/docs/powered-by-react',
  },*/
];

function Feature({ title, Svg, description, tags, docsLink }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" style={{ color: 'black' }}>{title}</Heading>
        <p style={{ color: 'black' }}>{description}</p>
        <div className="tags" style={{ marginTop: '1em' }}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="read-more" style={{ marginTop: '1em' }}>
          <a href={docsLink} className={styles.docsLink}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
