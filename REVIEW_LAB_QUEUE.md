# Review Lab queue

The Review Lab separates three different products of research:

1. A **documentation review** may compare published specifications and policies.
2. A **test plan** states what would need to be measured before buying or recommending a product.
3. A **hands-on review** is published only after the physical unit has been tested and the raw observations have been retained.

Affiliate approval or commission never changes the test method or verdict.

## Priority 1 — NVIDIA RTX A4000 for a compact local-AI workstation

Why it is interesting: NVIDIA documents 16 GB GDDR6 ECC memory, a 140 W maximum power figure, PCIe Gen 4 x16, and a single-slot form factor. That combination makes a used-card audit relevant to compact workstations where power and space matter.

Required experiment:

- Record seller, serial and cosmetic evidence, firmware, system configuration, drivers, OS, model files, quantization, context length, and batch settings.
- Measure idle and loaded wall power, peak temperature, fan noise, model-load success, first-token latency, and generation speed.
- Compare at least one model that fits comfortably and one that approaches the VRAM limit.
- Do not infer used-card reliability from one sample.

Primary source: https://www.nvidia.com/en-us/products/workstations/rtx-a4000/

## Priority 2 — TOPDON TC001 Plus for electronics and buildings

Why it is interesting: the manufacturer publishes a 256 × 192 infrared resolution, less than 40 mK NETD, 25 Hz frame rate, and a stated object-temperature range of -20°C to 550°C. Those numbers require a practical explanation: spatial resolution, emissivity, reflections, distance, and reference accuracy determine whether the image supports a diagnosis.

Required experiment:

- Compare matte and reflective targets at controlled temperatures.
- Record emissivity settings, distance, ambient temperature, stabilization time, and reference-probe placement.
- Test small hot components, electrical connections, pipework, insulation discontinuities, and window or wall transitions.
- Separate visual anomaly detection from absolute temperature measurement.

Primary source: https://la.topdon.com/collections/thermal-imager/products/tc001-plus

## Priority 3 — Pinecil V2 portable soldering iron

Why it is interesting: PINE64 documents a RISC-V controller, IronOS, USB-C PD/QC and barrel-power inputs, and operation up to 24 V. Its real usefulness depends on the complete power chain and tip, not the handle alone.

Required experiment:

- Record charger protocol, rated voltage/current, cable rating, firmware version, tip type, set point, and ambient temperature.
- Measure cold-start heat-up, recovery after a standardized joint, temperature stability, handle temperature, and energy use.
- Repeat with two supported power sources.
- Document every safety limit from the official instructions before testing.

Primary source: https://pine64.org/documentation/Pinecil/

## Priority 4 — Analog Discovery 3 portable mixed-signal lab

Why it is interesting: Digilent combines two analog inputs, two waveform outputs, 16 digital I/O channels, programmable supplies, and protocol tools in one USB device. A useful review must distinguish sampling rate from analog bandwidth and include the cost and limits of required adapters.

Required experiment:

- Verify usable bandwidth, noise floor, triggering, record length, protocol decoding, waveform output, and supply behavior.
- Record all probes, adapters, auxiliary power, software version, and calibration status.
- Compare the same tasks with a bench oscilloscope or explain why no valid comparison is available.
- Identify input-protection scenarios where a conventional isolated or bench instrument is safer.

Primary source: https://digilent.com/shop/analog-discovery-3/

## Habr route

Habr is not an affiliate-distribution channel. Its rules prohibit referral links and advise against AI-written or AI-edited publications. For that platform, the lab may supply sources, experiment design, data, calculations, and charts. Xamit must perform the experiment and write the final narrative personally from the recorded work.

Official rules: https://habr.com/ru/docs/help/rules/
