import { injectGlobal } from 'styled-components';
import EsriColors from './EsriColors';

const CalciteTheme = {
  palette: {
    // ┌───────────┐
    // │ Grayscale │
    // └───────────┘
    white: '#ffffff',
    offWhite: EsriColors.Calcite_Gray_100,
    lightestGray: EsriColors.Calcite_Gray_200,
    lighterGray: EsriColors.Calcite_Gray_350,
    lightGray: EsriColors.Calcite_Gray_400,
    gray: EsriColors.Calcite_Gray_450,
    darkGray: EsriColors.Calcite_Gray_500,
    darkerGray: EsriColors.Calcite_Gray_550,
    darkestGray: EsriColors.Calcite_Gray_600,
    offBlack: EsriColors.Calcite_Gray_650,
    black: EsriColors.Calcite_Gray_700,

    transparentWhite: 'rgba(255, 255, 255, 0.7)',
    opaqueWhite: 'rgba(255, 255, 255, 0.8)',
    transparentOffWhite: 'rgba(0, 0, 0, 0.1)',

    transparentDarkerGray: 'rgba(0, 0, 0, 0.3)',
    transparentOffBlack: 'rgba(0, 0, 0, 0.45)',
    transparentBlack: 'rgba(0, 0, 0, 0.75)',
    opaqueBlack: 'rgba(0, 0, 0, 0.85)',

    // ┌────────────┐
    // │ Brand Blue │
    // └────────────┘
    Brand_Blue_100: EsriColors.Brand_Blue_100, //  previously blue 14
    Brand_Blue_150: EsriColors.Brand_Blue_150, // previously blue 13
    Brand_Blue_200: EsriColors.Brand_Blue_200, // "Esri Blue", previously blue 12
    Brand_Blue_250: EsriColors.Brand_Blue_250, // previously blue 11

    // ┌───────────┐
    // │ UI Colors │
    // └───────────┘
    lightestBlue: EsriColors.Calcite_Blue_100,
    lighterBlue: EsriColors.Calcite_Blue_150,
    lightBlue: EsriColors.Calcite_Blue_250,
    blue: EsriColors.Calcite_Highlight_Blue_350,
    darkBlue: EsriColors.Calcite_Highlight_Blue_400,
    darkerBlue: '#052942',

    lightestGreen: EsriColors.Calcite_Green_100,
    lightGreen: EsriColors.Calcite_Green_150,
    green: EsriColors.Calcite_Green_250,
    darkGreen: EsriColors.Calcite_Green_a200,

    lightestRed: EsriColors.Calcite_Red_100,
    lightRed: EsriColors.Calcite_Red_150,
    red: EsriColors.Brand_Red_100,
    darkRed: EsriColors.Calcite_Red_a200,

    lightestOrange: EsriColors.Calcite_Orange_a100,
    lightOrange: EsriColors.Calcite_Orange_a150,
    orange: EsriColors.Calcite_Orange_a200,
    darkOrange: EsriColors.Calcite_Orange_a250,

    lightestYellow: EsriColors.Calcite_Yellow_100,
    lightYellow: EsriColors.Calcite_Yellow_150,
    yellow: EsriColors.Calcite_Yellow_200,
    darkYellow: EsriColors.Calcite_Yellow_a150,

    lightestPurple: EsriColors.Calcite_Purple_100,
    lightPurple: EsriColors.Calcite_Purple_150,
    purple: EsriColors.Calcite_Purple_200,
    darkPurple: EsriColors.Calcite_Purple_a150,

    lightestBrown: EsriColors.Calcite_Brown_100,
    lightBrown: EsriColors.Calcite_Brown_150,
    brown: EsriColors.Calcite_Brown_250,
    darkBrown: EsriColors.Calcite_Brown_a200
  },
  type: {
    // Header Family
    avenirTracking: 0,
    avenirFamily:
      '"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif',

    // Code Family
    codeTracking: 0,
    codeFamily:
      '"Consolas", "Andale Mono", "Lucida Console", "Monaco", monospace',

    // Structural
    ratio: 1.414,
    mediumRatio: 1.33,
    smallRatio: 1.25,
    bodySize: '1rem',
    smallSize: '0.85rem',
    indent: '1em'
  },

  // ┌──────────────┐
  // │ UI Variables │
  // └──────────────┘
  transition: '150ms linear',
  boxShadow: '0 0 16px 0 rgba(0,0,0,.05)',
  drawerWidth: '280px',
  easingFunction: 'cubic-bezier(0.215, 0.440, 0.420, 0.880)',

  // ┌─────────────┐
  // │ TYPE COLORS │
  // └─────────────┘
  typeColor: EsriColors.Calcite_Gray_650,
  linkColor: EsriColors.Calcite_Highlight_Blue_350,
  linkHover: EsriColors.Calcite_Highlight_Blue_400,

  // ┌──────────────┐
  // │ Breakpoints  │
  // └──────────────┘
  small: '480px',
  medium: '860px',
  large: '1450px',

  // ┌────────────────────┐
  // │ Grid Configuration │
  // └────────────────────┘
  prefix: '',

  vwRatio: '0.95',
  containerWidth: '1450px',
  maxWidth: '0.95 * 100vw',
  columnGutter: '1rem',

  // Grid Fallback Options
  ie8Support: false,
  columnGutterFallback: '20px',
  containerWidthFallback: '960px',

  // Medium
  largeClass: 'large',
  largeColumnCount: '24',

  // Default
  defaultColumnCount: '24',

  // Medium
  mediumClass: 'tablet',
  mediumColumnCount: '12',

  // Small
  smallClass: 'phone',
  smallColumnCount: '6',

  // Rhythm
  horizontalRange: '4',
  verticalRange: '6',
  baseline: '1.55rem'
};

//Do the global styles stuff
injectGlobal`
  html {
    overflow-y: scroll;
    height: 100%;
    font-size: 100%;
    font-family: 'Avenir Next W01', 'Avenir Next W00', 'Avenir Next', 'Avenir',
      'Helvetica Neue', sans-serif;
  }

  body {
    min-height: 100%;
    margin: 0;

    tracking: 0;
    font-family: "Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif;
    line-height: 1.55rem;
    color: #4c4c4c;
    background-color: #ffffff;

    -webkit-font-smoothing: subpixel-antialiased;

    font-feature-settings: "kern";

    font-kerning: normal;
    text-rendering: optimizeLegibility;
    font-feature-settings : "liga" 1,"calt" 0;
  }

  .wrapper {
    overflow: hidden;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden] {
    display: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  video,
  img {
    max-width: 100%;
    height: auto;
  }

  .ie {
    main {
      display: block;
    }

    select {
      padding-right: 8px;
    }
  }

  /* Type */
  @import url(https://fast.fonts.net/t/1.css?apiType=css&projectid=9431e9a5-7a6d-4b5f-82be-4d935972de5a);
  @font-face{
    font-family:"Avenir Next W00_n2";
    src:url("https://fast.fonts.net/dv2/2/5db267f9-3612-485c-ae18-5698d2692816.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot");
  }
  @font-face{
    font-family:"Avenir Next W00";
    src:url("https://fast.fonts.net/dv2/2/5db267f9-3612-485c-ae18-5698d2692816.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix");
    src:url("https://fast.fonts.net/dv2/2/5db267f9-3612-485c-ae18-5698d2692816.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot"),url("https://fast.fonts.net/dv2/14/174d458a-81e0-4174-9473-35e3bf0a613c.woff2?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff2"),url("https://fast.fonts.net/dv2/3/57a79aa3-9b06-4ba7-a9a4-2b766d826ecf.woff?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff"),url("https://fast.fonts.net/dv2/1/733cb7bd-50e1-4dee-893a-0b40ef382b02.ttf?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("truetype"),url("https://fast.fonts.net/dv2/11/594135c6-6c4f-4880-a0d2-ba923b5ef38e.svg?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#594135c6-6c4f-4880-a0d2-ba923b5ef38e") format("svg");
    font-weight:200;font-style:normal;
  }
  @font-face{
    font-family:"Avenir Next W00_n4";
    src:url("https://fast.fonts.net/dv2/2/069faa0e-9913-48c4-9ef7-89a4bc080b65.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot");
  }
  @font-face{
    font-family:"Avenir Next W00";
    src:url("https://fast.fonts.net/dv2/2/069faa0e-9913-48c4-9ef7-89a4bc080b65.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix");
    src:url("https://fast.fonts.net/dv2/2/069faa0e-9913-48c4-9ef7-89a4bc080b65.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot"),url("https://fast.fonts.net/dv2/14/7db1f672-3a8f-4d19-9c49-7f61aed450b5.woff2?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff2"),url("https://fast.fonts.net/dv2/3/4ab86b35-c0c2-42b5-98ad-4b6eba66b197.woff?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff"),url("https://fast.fonts.net/dv2/1/276b3566-1c3b-4bc1-8915-15314f091f29.ttf?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("truetype"),url("https://fast.fonts.net/dv2/11/5d02f5f4-46e7-453a-aef9-3e7106d7bb68.svg?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#5d02f5f4-46e7-453a-aef9-3e7106d7bb68") format("svg");
    font-weight:400;font-style:normal;
  }
  @font-face{
    font-family:"Avenir Next W00_n5";
    src:url("https://fast.fonts.net/dv2/2/c6970a14-8b0f-4629-9072-71c7e123908f.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot");
  }
  @font-face{
    font-family:"Avenir Next W00";
    src:url("https://fast.fonts.net/dv2/2/c6970a14-8b0f-4629-9072-71c7e123908f.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix");
    src:url("https://fast.fonts.net/dv2/2/c6970a14-8b0f-4629-9072-71c7e123908f.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot"),url("https://fast.fonts.net/dv2/14/b0b84e4d-2164-45c7-a674-1662f19f3ba6.woff2?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff2"),url("https://fast.fonts.net/dv2/3/e91d1bbf-3fea-45e2-b003-a22b12ce6e5f.woff?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff"),url("https://fast.fonts.net/dv2/1/ead8b64b-1abd-4d5b-a642-a21dfe2f463b.ttf?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("truetype"),url("https://fast.fonts.net/dv2/11/e536e1c2-92a4-4db4-8a41-1c55354d11b7.svg?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#e536e1c2-92a4-4db4-8a41-1c55354d11b7") format("svg");
    font-weight:500;font-style:normal;
  }
  @font-face{
    font-family:"Avenir Next W00_n6";
    src:url("https://fast.fonts.net/dv2/2/fbf4298d-ef75-419c-b615-47f209a48ed2.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot");
  }
  @font-face{
    font-family:"Avenir Next W00";
    src:url("https://fast.fonts.net/dv2/2/fbf4298d-ef75-419c-b615-47f209a48ed2.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix");
    src:url("https://fast.fonts.net/dv2/2/fbf4298d-ef75-419c-b615-47f209a48ed2.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot"),url("https://fast.fonts.net/dv2/14/40d36b4a-60c6-460a-bf43-4c948c23563e.woff2?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff2"),url("https://fast.fonts.net/dv2/3/45b78f45-e639-4836-8612-e0892e120f14.woff?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff"),url("https://fast.fonts.net/dv2/1/cbc021cc-b96f-4c82-ba0d-59cb0b7449c0.ttf?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("truetype"),url("https://fast.fonts.net/dv2/11/c6778bcf-ca82-4a86-8a5f-08b70c9a71fd.svg?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#c6778bcf-ca82-4a86-8a5f-08b70c9a71fd") format("svg");
    font-weight:600;font-style:normal;
  }
  @font-face{
    font-family:"Avenir Next W01_n3";
    src:url("https://fast.fonts.net/dv2/2/0ecef829-586e-426d-a633-4c8a8c926769.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot");
  }
  @font-face{
    font-family:"Avenir Next W01";
    src:url("https://fast.fonts.net/dv2/2/0ecef829-586e-426d-a633-4c8a8c926769.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix");
    src:url("https://fast.fonts.net/dv2/2/0ecef829-586e-426d-a633-4c8a8c926769.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot"),url("https://fast.fonts.net/dv2/14/49c5f3e1-5867-4b1d-a843-2d07fa60d85d.woff2?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff2"),url("https://fast.fonts.net/dv2/3/f401df6f-54eb-406c-b46a-90b9451c598d.woff?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff"),url("https://fast.fonts.net/dv2/1/276fe25e-e430-4376-b33c-705dd77b3dba.ttf?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("truetype"),url("https://fast.fonts.net/dv2/11/869dc33b-3685-4d74-a51c-82b435579093.svg?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#869dc33b-3685-4d74-a51c-82b435579093") format("svg");
    font-weight:300;font-style:normal;
  }
  @font-face{
    font-family:"Avenir Next W01_n4";
    src:url("https://fast.fonts.net/dv2/2/e9167238-3b3f-4813-a04a-a384394eed42.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot");
  }
  @font-face{
    font-family:"Avenir Next W01";
    src:url("https://fast.fonts.net/dv2/2/e9167238-3b3f-4813-a04a-a384394eed42.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix");
    src:url("https://fast.fonts.net/dv2/2/e9167238-3b3f-4813-a04a-a384394eed42.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot"),url("https://fast.fonts.net/dv2/14/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff2"),url("https://fast.fonts.net/dv2/3/1e9892c0-6927-4412-9874-1b82801ba47a.woff?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff"),url("https://fast.fonts.net/dv2/1/46cf1067-688d-4aab-b0f7-bd942af6efd8.ttf?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("truetype"),url("https://fast.fonts.net/dv2/11/52a192b1-bea5-4b48-879f-107f009b666f.svg?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#52a192b1-bea5-4b48-879f-107f009b666f") format("svg");
    font-weight:400;font-style:normal;
  }
  @font-face{
    font-family:"Avenir Next W01_n5";
    src:url("https://fast.fonts.net/dv2/2/1a7c9181-cd24-4943-a9d9-d033189524e0.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot");
  }
  @font-face{
    font-family:"Avenir Next W01";
    src:url("https://fast.fonts.net/dv2/2/1a7c9181-cd24-4943-a9d9-d033189524e0.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix");
    src:url("https://fast.fonts.net/dv2/2/1a7c9181-cd24-4943-a9d9-d033189524e0.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot"),url("https://fast.fonts.net/dv2/14/627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff2"),url("https://fast.fonts.net/dv2/3/f26faddb-86cc-4477-a253-1e1287684336.woff?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff"),url("https://fast.fonts.net/dv2/1/63a74598-733c-4d0c-bd91-b01bffcd6e69.ttf?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("truetype"),url("https://fast.fonts.net/dv2/11/a89d6ad1-a04f-4a8f-b140-e55478dbea80.svg?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#a89d6ad1-a04f-4a8f-b140-e55478dbea80") format("svg");
    font-weight:500;font-style:normal;
  }
  @font-face{
    font-family:"Avenir Next W01_n6";
    src:url("https://fast.fonts.net/dv2/2/12d643f2-3899-49d5-a85b-ff430f5fad15.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot");
  }
  @font-face{
    font-family:"Avenir Next W01";
    src:url("https://fast.fonts.net/dv2/2/12d643f2-3899-49d5-a85b-ff430f5fad15.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix");
    src:url("https://fast.fonts.net/dv2/2/12d643f2-3899-49d5-a85b-ff430f5fad15.eot?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#iefix") format("eot"),url("https://fast.fonts.net/dv2/14/aad99a1f-7917-4dd6-bbb5-b07cedbff64f.woff2?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff2"),url("https://fast.fonts.net/dv2/3/91b50bbb-9aa1-4d54-9159-ec6f19d14a7c.woff?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("woff"),url("https://fast.fonts.net/dv2/1/a0f4c2f9-8a42-4786-ad00-fce42b57b148.ttf?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a") format("truetype"),url("https://fast.fonts.net/dv2/11/99affa9a-a5e9-4559-bd07-20cf0071852d.svg?d44f19a684109620e4841678a190e8188b840650be32dfdff11226f4eb7fb62da2e4ff3ac5cb9baab9aeebd387f687d9b2e887da180096d585541d490d3d9db024bb32bb30fda6ff2d79d5960f7e637780942055575c79d5999be6317cd2d9d893107e020badd8044f29d12eed77cbe2e4ceae93321cb707732be30a17f2d854fe9b6eac5d9a24169d94c96c5d3ec2a9204fbd6a2ceb5a2d56a22044d41f42d9d47bbaa0a29232c8a85f469fd695c13771f0e196df56a5f905efb130244641637912fb8e675b873323ab93f92ed2551dc42a3aa38c068521&projectId=9431e9a5-7a6d-4b5f-82be-4d935972de5a#99affa9a-a5e9-4559-bd07-20cf0071852d") format("svg");
    font-weight:600;font-style:normal;
  }
`;

export default CalciteTheme;