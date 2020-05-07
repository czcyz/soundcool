const toHex = (r, g, b) => {
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
};

const specValues = {
  Delay: {
    color: toHex(210, 189, 120),
    delayTime: 76,
    maxDelayTime: 10000,
    delayFeedback: 0.119,
    osc: false,
    oscPort: undefined
  },
  Transposer: {
    color: toHex(193, 133, 200),
    buttonCents: 0,
    sliderCents: 0,
    osc: undefined
  },
  Pan: {
    color: toHex(136, 179, 95),
    panVal: 0,
    osc: false,
    oscPort: undefined
  },
  Player: {
    inDisabled: true,
    color: toHex(229, 119, 125),
    playing: false,
    reversed: false,
    loop: false,
    speed: 1,
    volume: 100,
    playedTime: 0,
    file: undefined,
    osc: false,
    oscPort: undefined
  },
  SignalGen: {
    color: toHex(89, 199, 198),
    frequency: 440,
    waveform: "Silence",
    modulation: "No Mod",
    MI: 0,
    FD: 0,
    volume: 100,
    osc: false,
    oscPort: undefined
  },
  Speaker: {
    color: toHex(240, 254, 199),
    muted: false,
    meterL: 60,
    meterR: 60,
    renderRate: 100
  },
  DirectInput: {
    inDisabled: true,
    color: toHex(200, 231, 253),
    direction: 0,
    muted: false,
    channel: 1,
    volume: 0.6,
    osc: undefined
  },
  Pitch: {
    color: toHex(220, 105, 216),
    pitch: 0,
    osc: false,
    grainSize: 0.1,
    oscPort: undefined
  },
  VSTHost: {
    color: toHex(136, 179, 95),
    file: undefined,
    module: true,
    version: "to Soundcool 3.1.1",
    channel: 1,
    osc: undefined
  },
  Routing: {
    color: toHex(58, 82, 221),
    inDisabled: true,
    outDisabled: true,
    off1: true,
    output11: false,
    output21: false,
    off2: true,
    output12: false,
    output22: false
  },
  Mixer: {
    color: toHex(103, 227, 229),
    inDisabled: true,
    masterGain: 0.6,
    node0Gain: 0.6,
    node1Gain: 0.6,
    node2Gain: 0.6,
    node3Gain: 0.6,
    node4Gain: 0.6,
    node5Gain: 0.6,
    node6Gain: 0.6,
    node7Gain: 0.6,
    osc: false,
    oscPort: undefined
  },
  Record: {
    color: toHex(159, 125, 119),
    outDisabled: true,
    module: false,
    fileName: undefined,
    recording: false,
    volume: 60,
    timer: 0
  },
  Spectroscope: {
    color: toHex(141, 104, 133),
    outDisabled: true,
    renderRate: 100
  },
  Oscilloscope: {
    color: toHex(141, 104, 133),
    outDisabled: true,
    renderRate: 100
  },
  Envelope: {
    color: toHex(80, 174, 55),
    pointCount: 0,
    envelope: [],
    loop: false,
    style: "line",
    duration: 1.0,
    osc: undefined,
    startSampleId: 0,
    endSampleId: 0,
    sustainAmp: 0,
    arr: []
  },
  Filter: {
    color: toHex(144, 81, 57)
  },
  Sequencer: {
    color: toHex(202, 240, 253),
    inDisabled: true,
    outDisabled: true,
    waveforms: [
      "Silence",
      "Silence",
      "Silence",
      "Silence",
      "Silence",
      "Silence",
      "Silence",
      "Silence",
      "Silence"
    ],
    modulations: [
      "No Mod",
      "No Mod",
      "No Mod",
      "No Mod",
      "No Mod",
      "No Mod",
      "No Mod",
      "No Mod",
      "No Mod"
    ],
    modulationValues: [0, 0, 0, 0, 0, 0, 0, 0],
    notes: [0, 4, 8, 10, 14, 18, 22, 0],
    durations: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    selecteds: [true, true, true, true, true, true, true, true],
    skippeds: [false, false, false, false, false, false, false, false],
    looping: false,
    playStyle: "None"
  },
  SamplePlayer: {
    color: toHex(229, 119, 125),
    inDisabled: true,
    random: false,
    loop: false,
    speed: 1,
    reversed: false,
    osc: false,
    oscPort: undefined,
    playings: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    files: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ],
    inDisableds: [true, true, true, true, true, true, true, true, true, true],
    masterVolume: 100
  },
  Keyboard: {
    color: toHex(89, 162, 179),
    inDisabled: true,
    instrument: "1 Acoustic Grand Piano",
    channel: 1,
    viewNames: false,
    volume: 60,
    module: false,
    octave: "3",
    //
    noteOn: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    midiMessage: undefined
  },
  Reverb: {
    color: toHex(122, 187, 197),
    preset: "Hall",
    mix: 0.5,
    bypass: false
  },
  GranSynth: {
    color: toHex(114, 229, 190),
    // Grain Rate: expected number of grains to be played per second. range: [1, 1000]; default: 100.
    rate: 100,
    // specifies jitter (explained below) in grain scheduling. range: [0, 1]; default: 0.5.
    ioi_jitter: 0.5,
    // duration of each grain in seconds. range: [0.01, 1]; default: 0.05.
    dur: 0.05,
    // specifies by how much to transpose a grain in cents. range: [-2400, 2400]; default: 0.
    pitch_shift: 0,
    // specifies a range of random pitch shift offset in cents. range: [0, 4800]; default: 0.
    pitch_jitter: 0,
    // probability of reversing a grain during playback. range: [0, 1]; default: 0.
    reverse: 0,
    // pan amount during grain playback. range: [-1, 1]. -1 is full left pan; 1 is full right pan. default: 0.
    pan: 0,
    // specifies a range of random offset added to pan amount for each grain. range: [0, 2]; default: 0.
    pan_jitter: 0,
    // specfies the amount of delay in seconds from input to output. range: [0, 20]; default: 1.
    delay: 1,
    // specifies the spread in seconds around delay grains. range: [0, 20]; default: 2.
    delay_jitter: 2,
    osc: false,
    oscPort: undefined
  }
};

export default specValues;
