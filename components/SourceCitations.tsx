import React from 'react';
import { GroundingChunk } from '../types';
import { LinkIcon } from './icons/LinkIcon';

interface SourceCitationsProps {
  chunks: GroundingChunk[];
}

const SourceCitations: React.FC<SourceCitationsProps> = ({ chunks }) => {
  const validChunks = chunks.filter(chunk => chunk.web && chunk.web.uri);

  if (validChunks.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h4 className="font-semibold text-sm text-gray-600">Sources:</h4>
      <div className="flex flex-wrap gap-2 mt-2">
        {validChunks.map((chunk, index) => (
          chunk.web?.uri && (
            <a
              key={index}
              href={chunk.web.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
            >
              <LinkIcon className="h-3 w-3" />
              <span>{chunk.web.title || new URL(chunk.web.uri).hostname}</span>
            </a>
          )
        ))}
      </div>
    </div>
  );
};

export default SourceCitations;
