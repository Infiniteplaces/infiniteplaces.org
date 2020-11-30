import React, { useState } from 'react';
import cx from 'classnames';
import withBreakpoints, {
  MediaQuery,
  InjectedProps as WithBreakpointsProps,
} from 'lib/withBreakpoints';
import { PressListItem } from 'lib/cms/types';
import { Button } from 'components/base';
import { LineIcon } from 'components/icons';

type PassedProps = {
  className?: string;
  variant: string;
  heading?: string;
  items: PressListItem[];
};

//TO-DO: remove state for button hover.

type Props = PassedProps & WithBreakpointsProps;
const PressList: React.FC<Props> = ({ heading, items, className, variant, mediaQuery }) => {
  return (
    <div
      className={cx(
        `PressList PressList--style-${variant} col-12 flex flex-row flex-wrap secondary-sm`,
        className
      )}
    >
      {heading && (
        <div className="PressList__heading color-charcoal primary-sm pb2_25 md:pb3_75">
          {heading}
        </div>
      )}
      {items.map((item: PressListItem) => (
        <div key={item.heading} className="PressList__item col-12">
          {PressItem(item, mediaQuery)}
        </div>
      ))}
    </div>
  );
};

export default withBreakpoints<Props>(PressList);

const PressItem = (item: PressListItem, mediaQuery: MediaQuery) => {
  const [hoverButton, setHoverButton] = useState(false);
  const breakpointIsMdUp = mediaQuery.isMediumUp;

  return (
    <div className="PressList__item-inner-container col-12 flex flex-row py1_5">
      <div className="PressList__source secondary-sm col-3 pr1 md:pr0">{item.source}</div>
      <div className="PressList__heading-container primary-md col-8">
        <span className="mr1_5">{item.heading}</span>
        <span
          className={cx('PressList__button', {
            block: !breakpointIsMdUp,
          })}
        >
          <Button
            wrap={true}
            className="inline-flex items-center text-decoration-none secondary-sm-bold vertical-align-middle color-charcoal"
            to={item.link.link}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
            ariaLabel={item.link.label}
          >
            <LineIcon
              className={cx('PressList__button-line-icon mr_25', {
                'PressList__button-line-icon--style-hover': hoverButton,
              })}
              color="charcoal"
            />
            {item.link.label}
            <span
              className={cx('PressList__button-placeholder-div opacity-1 events-none', {
                'PressList__button-placeholder-div--style-full-width': !hoverButton,
                'PressList__button-placeholder-div--style-no-width': hoverButton,
              })}
            ></span>
          </Button>
        </span>
      </div>
    </div>
  );
};