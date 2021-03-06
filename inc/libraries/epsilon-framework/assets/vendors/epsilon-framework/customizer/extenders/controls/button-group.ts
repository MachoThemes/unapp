import { EpsilonButtonGroup } from '../../controls/button-group';

declare var wp: any;

wp.customize.controlConstructor[ 'epsilon-button-group' ] = wp.customize.Control.extend( {
  ready() {
    const control = this;
    new EpsilonButtonGroup( control );
  }
} );
