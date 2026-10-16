import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Mic, Square, Volume2, Sparkles, Heart } from 'lucide-react';
import { playPopSound, playKissSound } from './AudioEffects';

export const VoiceNoteCassette: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(() => {
    return localStorage.getItem('ishika_custom_voice_note');
  });

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const customAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize custom audio if stored
  useEffect(() => {
    if (recordedAudioUrl) {
      customAudioRef.current = new Audio(recordedAudioUrl);
      customAudioRef.current.onended = () => setIsPlaying(false);
    }
  }, [recordedAudioUrl]);

  // Speak fallback message using SpeechSynthesis if no custom audio recorded
  const playDefaultVoice = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text =
        "Hey babyyy... Mera baccha. I just wanted to remind you that you are my favorite person, my safest place, and my future wife. I love you so much, Ishika. Mwaahhh!";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 1.05;
      utterance.rate = 0.9;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlaying(false);
    }
  };

  const handleTogglePlay = () => {
    playPopSound();
    if (isPlaying) {
      if (customAudioRef.current) {
        customAudioRef.current.pause();
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
    } else {
      if (customAudioRef.current) {
        customAudioRef.current.play().then(() => setIsPlaying(true)).catch(() => playDefaultVoice());
      } else {
        playDefaultVoice();
      }
    }
  };

  // Start recording voice note
  const startRecording = async () => {
    playPopSound();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = () => {
          const base64Data = reader.result as string;
          setRecordedAudioUrl(base64Data);
          localStorage.setItem('ishika_custom_voice_note', base64Data);
          customAudioRef.current = new Audio(base64Data);
          customAudioRef.current.onended = () => setIsPlaying(false);
        };
        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setIsRecording(true);
    } catch {
      alert("Microphone permission needed to record your voice note! Tap 'Allow' to record.");
    }
  };

  const stopRecording = () => {
    playKissSound();
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="paper-card rounded-3xl p-5 md:p-6 border-2 border-pink-200 shadow-md relative my-6 text-center">
      <div className="flex items-center justify-between mb-3">
        <span className="font-cute font-extrabold text-[11px] uppercase tracking-wider text-pink-700 bg-pink-100 px-2.5 py-1 rounded-full flex items-center gap-1">
          <Volume2 className="w-3 h-3 text-pink-500" />
          <span>Boyfriend’s Voice Note 🎙️</span>
        </span>
        <span className="font-script text-pink-400 font-bold text-base">Recorded for Babyyy</span>
      </div>

      <h3 className="font-caveat text-3xl font-extrabold text-pink-600 mb-1">
        A Voice Note Just For Ishika 📼💗
      </h3>
      <p className="font-hand text-pink-800 text-base mb-4">
        Tap to listen to a sweet spoken message whenever you miss my voice
      </p>

      {/* Retro Pink Cassette Body */}
      <div className="max-w-xs mx-auto bg-gradient-to-b from-[#ffdbe6] to-[#ffb6c9] rounded-2xl p-4 border-2 border-pink-400 shadow-inner relative overflow-hidden">
        {/* Cassette Label Strip */}
        <div className="bg-[#fffdf7] rounded-xl p-2 border border-pink-300 shadow-xs mb-3">
          <p className="font-script text-base text-pink-700 font-bold truncate">
            {recordedAudioUrl ? 'Custom Voice Note: For My Ishika ♡' : 'Boyfriend Note: Mera Baccha 🎧'}
          </p>
          <span className="text-[10px] font-cute text-pink-400 font-bold">SIDE A • STEREO</span>
        </div>

        {/* Cassette Wheels Window */}
        <div className="bg-pink-900/10 rounded-xl p-2.5 flex items-center justify-center gap-6 border border-pink-300/80 mb-3">
          {/* Wheel 1 */}
          <div
            className={`w-9 h-9 rounded-full bg-white border-2 border-pink-500 flex items-center justify-center shadow-xs ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '2s' }}
          >
            <div className="w-3.5 h-3.5 rounded-full bg-pink-400 border border-white" />
          </div>

          {/* Tape window */}
          <div className="h-4 w-12 bg-pink-950/20 rounded-full flex items-center justify-center">
            <span className="text-[9px] text-pink-800 font-bold">● REC</span>
          </div>

          {/* Wheel 2 */}
          <div
            className={`w-9 h-9 rounded-full bg-white border-2 border-pink-500 flex items-center justify-center shadow-xs ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '2s' }}
          >
            <div className="w-3.5 h-3.5 rounded-full bg-pink-400 border border-white" />
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleTogglePlay}
            className="py-2 px-5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-cute text-xs font-bold shadow-md shadow-pink-300 flex items-center gap-1.5 transition"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
            <span>{isPlaying ? 'PAUSE NOTE' : 'PLAY VOICE NOTE 🎧'}</span>
          </motion.button>
        </div>
      </div>

      {/* Record Voice Note Shortcut (For the boyfriend to record live) */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="px-3 py-1.5 rounded-lg bg-pink-100 hover:bg-pink-200 text-pink-700 font-cute text-xs font-bold flex items-center gap-1 transition shadow-2xs"
            title="Record your real voice note right from your microphone"
          >
            <Mic className="w-3.5 h-3.5 text-pink-600" />
            <span>{recordedAudioUrl ? 'Re-record Your Voice' : 'Record Your Real Voice 🎙️'}</span>
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="px-3 py-1.5 rounded-lg bg-rose-500 text-white font-cute text-xs font-bold flex items-center gap-1 shadow-sm animate-pulse"
          >
            <Square className="w-3.5 h-3.5 fill-white" />
            <span>Stop & Save Recording</span>
          </button>
        )}
      </div>

      {isRecording && (
        <p className="text-xs font-cute text-rose-500 font-bold mt-1 animate-bounce">
          ● Recording in progress... speak to your cutie pie!
        </p>
      )}
    </div>
  );
};
